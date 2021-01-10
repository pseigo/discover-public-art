import * as React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { Button, Image } from 'react-bootstrap';
import { PageButton } from './Components';
import '../css/profile.css';

const Profile = () => {
  const history = useHistory();

  const goToCheckins = () => {
    history.push(`/checkins`);
  }

  return (
    <div className="profile">
      <h1 className="page-title">Profile</h1>
      <div className="profile__header">
        <Image className="profile__image" src="../images/dummy-profile.jpeg" roundedCircle />
        <div className="header__desc">
          <h3 className="profile__name">Stephanie Kale</h3>
          <p className="profile__desc">I like exploring new places in my local city! I love travelling too!</p>
        </div>
      </div>
      <div className="profile__stats">
        <div className="profile__stat stat__checkins">
          <h3>101</h3>
          <p>Check Ins</p>
        </div>
        <div className="profile__stat stat__friends">
          <h3>46</h3>
          <p>Friends</p>
        </div>
      </div>
      <div className="profile__options">
        <Button className="options__btn" onClick={() => goToCheckins()}>View Check Ins</Button>
        <Button className="options__btn">Logout</Button>
      </div>
      <PageButton className="map-btn" src="../images/dummy-map.jpg" path="map"/>
    </div>
  );
};

export default Profile;
