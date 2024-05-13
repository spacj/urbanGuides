import React, { useState } from 'react';
import { Carousel, Button, Card } from 'react-bootstrap';
import Cards from './components/Cards.js';
import Buttons from './components/Buttons.js';
import TourData from './content/tourData.js';


const Tours = () => {
  const [items, setItems] = useState(TourData);
  const menuItems = [...new Set(TourData.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = TourData.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
  return (
    <div className="container-fluid">
      <div className="h-[13vh]"></div>
      <div className="flex flex-col justify-center text-center -mt-[3vh]">
        <h2 className="font-light">Discover the best tours in<br/><span className="text-[#fe573d] font-bold text-[30pt]">Milan</span>, <span className="font-medium text-3xl">Italy</span> </h2>
        <p className="w-screen text-white bg-[#fe573d] mt-1 -ml-[3vw] px-4 py-2">Choose your favorite category below and enjoy the best tours in the city</p>
      </div>
      <div className="row">
        <Buttons
          menuItems = {menuItems}
          filterItems={filterItems}
          setItems={setItems}
        />
        <Cards item={items}/>
      </div>
    </div>
  );
};

export default Tours;
