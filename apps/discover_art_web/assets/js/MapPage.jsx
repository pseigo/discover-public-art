import * as React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Image } from 'react-bootstrap';
import { PageButton } from './Components';
import '../css/Map.css';

const POIPopup = ({ POIsrc, POIName, POIArtist, POIAddress, POIDate, POIDescription}) => {
  return (
    <div className="poi-popup">
      <div className="poi__header">
        <Image className="poi__image" src={POIsrc} roundedCircle />
        <div className="poi__desc">
          <h3 className="poi__mural">{POIName}</h3>
          <p className="poi__artist">{POIArtist}</p>
          <p className="poi__address">{POIAddress}</p>
          <p className="poi__date">{POIDate}</p>
        </div>
      </div>
      <div className="poi__description">
        <p>{POIDescription}</p>
      </div>
    </div>
  );
}

const MapPage = () => {
  return (
    <div className="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup maxWidth="250">
            <POIPopup
              POIsrc="../images/dummy-poi.jpg"
              POIName="Some Mural"
              POIArtist="John Smith"
              POIAddress="3142 W 124th Ave"
              POIDate="08/23/2020"
              POIDescription="Description of the mural. This mural was made to display art for the general public to see. Painted using a paintbrush."
            />
          </Popup>
        </Marker>
      </MapContainer>
      <PageButton className="profile-btn" />
    </div>
  );
};


export default MapPage;
