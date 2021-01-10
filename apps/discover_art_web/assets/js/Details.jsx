import React, { useCallback } from 'react';
import { Image, Button } from 'react-bootstrap';
import { PageButton } from './Components';
import '../css/Details.css';

const Details = ({ record, viewDetails }) => {
    const toggleDetails = useCallback(() => {
        viewDetails('');
    }, [viewDetails])

    console.log(record);

    const { type, primarymaterials, yearofinstallation, photourl, sitename, siteaddress, descriptionofwork, artists } = record.fields;
    const formattedPhotourl = `https://opendata.vancouver.ca/explore/dataset/public-art/files/${photourl.id}/300/`;

    return (
        <div className="details">
            <div className="close-btn" onClick={() => toggleDetails()}></div>
            <h1 className="page-title">More Details</h1>
            <Image className="details__image" src={formattedPhotourl} roundedCircle />
            <div className="details__section">
                <div className="details__type">
                    <h3>Type</h3>
                    <p>{type}</p>
                </div>
                <div className="details__artist">
                    <h3>Artist</h3>
                    <p>John Smity</p>
                </div>
                <div className="details__materials">
                    <h3>Primary Materials</h3>
                    <p>{primarymaterials}</p>
                </div>
                <div className="details__address">
                    <h3>Site Address</h3>
                    <p>{siteaddress}</p>
                </div>
                <div className="details__date">
                    <h3>Year of Installation</h3>
                    <p>{yearofinstallation}</p>
                </div>
                <div className="details__description">
                    <h3>Description of Work</h3>
                    <p>{descriptionofwork}</p>
                </div>
            </div>
            <PageButton className="map-btn" />
        </div>
    );
}

export default Details;