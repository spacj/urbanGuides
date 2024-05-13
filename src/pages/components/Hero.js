import React from 'react';
import { Link } from 'react-router-dom';

function Hero({item}) {
  return (
    <>
      <div className="flex flex-col align-items-center mt-[3vh]">
      <h2 className="text-center w-[80vw] text-5xl font-bold -mt-[2vh]">{item.title}<span className="expoint text-6xl">!</span></h2>
      <h3 className="text-center w-[80vw] text-2xl font-light">{item.subtitle} <span className="font-medium">Urban Guides</span></h3>
      <p className="text-center w-[85vw] font-light text-md ">{item.about}</p>
      <Link to="/about" className="btn-hero" style={{ textDecoration: 'none' }}>
        Learn More
      </Link>
      </div>
      <div className="flex flex-col justify-items-center w-[100vw] -ml-[3vw] mt-[3vh] bg-[#fe573d] pb-[3vh]">
       <img src="https://www.goodnet.org/photos/620x0/35438_hd.jpg" alt="" className="" />
       <h2 className="text-white pl-[7vw] pt-[2vh] font-bold text-3xl px-4">{item.featureone}</h2>
       <h2 className="text-white pl-[7vw] pt-[0vh] font-light text-lg px-4">{item.featureonedesc}</h2>
       <Link to="/about" className="btn-hero-or min-w-[50%] self-start ml-[7vw] mt-[2vh]" style={{ textDecoration: 'none' }}>
         Discover Tour
       </Link>
      </div>
    </>

  );
};

export default Hero;
