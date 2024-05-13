import React, { useState } from 'react';
import TourData from '../content/tourData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faWineGlass, faCity, faMasksTheater, faUtensils, faPersonHiking, faFire, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const categoryIcons = {
  'Best Offers': faPercent,
  'City Tours': faCity,
  'Art & Culture': faMasksTheater,
  'Food': faUtensils,
  'Wine & Liquors': faWineGlass,
  'Nature': faPersonHiking,
  'Adrenaline': faFire,
  // Add more categories and their corresponding icons here
};

function Buttons({ menuItems, filterItems, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="scrollmenu">
      {menuItems.map((val, index) => (
        <button
          key={val}
          className={`${selectedCategory === val ? 'active' : ''}`}
          onClick={() => {
            setSelectedCategory(val);
            filterItems(val);
          }}
        >
          <div className="flex flex-col icon-nav-air">
            <FontAwesomeIcon
              icon={categoryIcons[val]}
              className={`pb-[12px] text-[18pt] ${selectedCategory === val ? 'active-icon' : ''}`}
            />
            <span className="text-[10pt]">{val}</span>
          </div>
        </button>
      ))}
      <button
        className="btn-dark text-grey"
        onClick={() => {
          setSelectedCategory(null);
          setItems(TourData);
        }}
      >
        <div className="flex flex-col icon-nav-air">
          <FontAwesomeIcon icon={faBarsStaggered} className="pb-[12px] text-[18pt]" />
          <span className="text-[10pt]">All</span>
        </div>
      </button>
    </div>
  );
}

export default Buttons;
