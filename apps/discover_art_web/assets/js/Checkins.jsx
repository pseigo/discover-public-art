import * as React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { PageButton } from './Components';
import '../css/Checkins.css';

const Checkins = () => (
  <div className="check-ins">
    <h1 className="page-title">Check Ins</h1>
    <h3 className="page-heading">You've Checked Into...</h3>
    <div className="poi-check-ins">
      <CheckCard src="../images/dummy-poi.jpg" address="3142 W 124th Ave" date="08/23/2020" />
      <CheckCard src="../images/dummy-poi.jpg" address="3142 W 124th Ave" date="08/23/2020" />
      <CheckCard src="../images/dummy-poi.jpg" address="3142 W 124th Ave" date="08/23/2020" />
    </div>
    <PageButton className="profile-btn" />
  </div>
);

const CheckCard = ({ src, address, date }) => {
  return (
    <div className="poi-card">
      <Image className="poi__image" src={src} roundedCircle />
      <div className="poi__desc">
        <h3 className="poi__address">{address}</h3>
        <p className="poi__date">{date}</p>
      </div>
    </div>
  );
}

export default Checkins;
