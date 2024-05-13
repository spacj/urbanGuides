import React from 'react';
import { Link } from 'react-router-dom';

function Hero({item}) {
  return (
    <>
      <div className="flex flex-col align-items-center">
      <img src="/images/mapImage.png" alt={item.title} />
      <h2 className="text-center w-[80vw] text-5xl font-bold -mt-[2vh]">{item.title}<span className="expoint text-6xl">!</span></h2>
      <h3 className="text-center w-[80vw] text-2xl font-light">{item.subtitle} <span className="font-medium">Urban Guides</span></h3>
      <p className="text-center w-[85vw] font-light text-md ">{item.about}</p>
      <Link to="/about" className="btn-hero" style={{ textDecoration: 'none' }}>
        Learn More
      </Link>
      </div>
      <div className="w-[100vw] -ml-[3vw] mt-[2vh] bg-[#fe573d] h-[15vh]">
      <h2 className="text-white pl-[7vw] pt-[2vh] font-light text-3xl">{item.featureone}</h2>
      <h2 className="text-white pl-[7vw] pt-[2vh] font-light text-2xl">{item.featureonedesc}</h2>
      </div>
    </>

  );
};

export default Hero;
