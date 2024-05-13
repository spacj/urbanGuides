import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import TourData from '../content/tourData';
import airbnbIcon from '../content/images/airbnb.png';
import tripadvisorIcon from '../content/images/tripadvisor.png';
import getyourguideIcon from '../content/images/getyourguide.png';

// Example mapping of providers to icons
const providerIcons = {
  'airbnb': airbnbIcon,
  'tripadvisor': tripadvisorIcon,
  'getyourguide': getyourguideIcon,
};

function Cards({ item }) {
  const getProviderIcon = (provider) => {
    return providerIcons[provider] || providerIcons['default'];
  };

  return (
    <div className="container">
      <div className="justify-content-center grid grid-cols-2">
        {item.map((val) => (
          <a key={val.id} href={val.linkTo} className="col-md-4 col-sm-6 card m-1 overa" style={{ textDecoration: 'none' }}>
            <div className="card-img-top text-center">
              <img src={val.img} alt="img" className="rounded-md rounded-b-none" />
            </div>
            <div className="card-body">
              <div className="card-reviews">
                <span className="reviews-bar-card"><FontAwesomeIcon icon={faStar} /> {val.rate} ({val.reviews}) ◦ {val.time}</span>
              </div>
              <div className="card-title fw-bold fs-4">
                {val.title}
              </div>
              <div className="flex flex-row justify-between items-center">
                <div className="card-price-tag">From {val.price} </div>
                <div className="card-provider">
                  <img src={getProviderIcon(val.provider)} alt={val.provider} className="h-10 mr-2" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Cards;
