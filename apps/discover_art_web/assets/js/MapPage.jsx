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
          <Popup maxWidth="250" maxHeight="160">
            <POIPopup
              POIsrc="../images/dummy-poi.jpg"
              POIName="Mural"
              POIArtist="Curtis Grahauer"
              POIAddress="3142 W 124th Ave"
              POIDate="08/23/2020"
              POIDescription="The film Tidal Pool by Curtis Grahauer represents New Brighton Park in Vancouver as a point of articulation between global industry and natural adaptation. The former salt marsh next to the Ironworker’s Memorial Bridge early on had a swimming pool that was filled by the tide. When the waters became polluted by industry, a new pool was built. Waterfowl adapted and settled in the pool through the winter months. Now there is an initiative to turn the edge back into a salt marsh. The film contemplates the site as a pivotal place of contestation between the natural and industrial forces of the coastal city."
            />
          </Popup>
        </Marker>
      </MapContainer>
      <PageButton className="profile-btn" />
    </div>
  );
};


export default MapPage;
