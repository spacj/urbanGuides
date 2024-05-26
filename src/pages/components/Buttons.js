import React, { useState } from 'react';
import TourData from '../content/tourData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faWineGlass, faCity, faMasksTheater, faUtensils, faPersonHiking, faFire, faBarsStaggered, faBusSimple } from '@fortawesome/free-solid-svg-icons';

const categoryIcons = {
  'Best Offers': faPercent,
  'Transport': faBusSimple,
  'City Tours': faCity,
  'Art & Culture': faMasksTheater,
  'Food': faUtensils,
  'Wine & Liquors': faWineGlass,
  'Nature': faPersonHiking,
  'Adrenaline': faFire,
  // Add more categories and their corresponding icons here
};

const categoryOrder = [
  'Best Offers',
  'Transport',
  'City Tours',
  'Art & Culture',
  'Food',
  'Wine & Liquors',
  'Nature',
  'Adrenaline',
  // Add the categories in the desired order
];

function Buttons({ filterItems, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("Best Offers");

  return (
    <div className="scrollmenu">
      {categoryOrder.map((val) => (
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
