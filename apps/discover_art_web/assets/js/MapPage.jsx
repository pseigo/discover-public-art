import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Image, Button } from 'react-bootstrap';
import { PageButton } from './Components';
import Details from './Details';
import '../css/Map.css';

const POIPopup = ({ POIsrc, POIName, POIArtist, POIAddress, POIDate, POIDescription, POIId, viewDetails }) => {
  const toggleDetails = useCallback(() => {
    viewDetails(POIId);
  }, [viewDetails])

  return (
    <div className="poi-popup">
      <div className="poi__header">
        <Image className="poi__image" src={POIsrc} roundedCircle />
        <div className="poi__desc">
          <h3 className="poi__type">{POIName}</h3>
          <p className="poi__artist">{POIArtist}</p>
          <p className="poi__address">{POIAddress}</p>
          <p className="poi__date">{POIDate}</p>
        </div>
      </div>
      <div className="poi__description">
        <p>{POIDescription}</p>
      </div>
      <div className="poi__options">
        <Button className="btn" onClick={() => toggleDetails()}>View More</Button>
        <Button className="btn">Check In</Button>
      </div>
    </div>
  );
}

const MapPage = () => {
  const [pois, setPois] = useState([]);
  const [show, setVisibility] = useState('show');

  const [detailsVisibility, setDetailsVisibility] = useState('');

  const test = () => {
    setDetailsVisibility('');
  }

  const fetchPOIs = () => {
    const numRows = 5;
    const url = `https://opendata.vancouver.ca/api/records/1.0/search/?dataset=public-art&q=&rows=${numRows}&facet=type&facet=status&facet=sitename&facet=siteaddress&facet=primarymaterial&facet=ownership&facet=neighbourhood&facet=artists&facet=photocredits&facet=geom&exclude.status=Removed`;
    fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
        // Examine the text in the response
        return response.json().then(function(data) {
          console.log(data.records);
          setPois(data.records);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }

  return (
    <div className="map">
      { detailsVisibility !== '' && <Details record={pois.find(poi => poi.recordid === detailsVisibility)} viewDetails={test} /> }

      <MapContainer center={[49.258439, -123.1007]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
          pois.map(poi => {
            const { status, type, yearofinstallation, photourl, sitename, siteaddress, descriptionofwork, geom, artists } = poi.fields;
            const id = poi.recordid;
            const formattedGeom = geom.coordinates.reverse();
            const formattedPhotourl = `https://opendata.vancouver.ca/explore/dataset/public-art/files/${photourl.id}/300/`;

            return (
              <Marker key={id} position={formattedGeom}>
                <Popup maxWidth="280" maxHeight="220">
                  <POIPopup
                    POIsrc={formattedPhotourl}
                    POIName={type}
                    POIArtist="Curtis Grahauer"
                    POIAddress={siteaddress}
                    POIDate={yearofinstallation}
                    POIDescription={descriptionofwork}
                    POIId={id}
                    viewDetails={setDetailsVisibility}
                  />
                </Popup>
              </Marker>
            );
          })
        }
      </MapContainer>
      <PageButton className="profile-btn" src="../images/dummy-profile.jpeg" path="profile"/>
      <Button className={`btn load-btn ${show}`} onClick={() => {
        fetchPOIs()
        setVisibility('hidden')
      }}>
        Load Markers
      </Button>
    </div>
  );
};


export default MapPage;
