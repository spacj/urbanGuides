import React from 'react';
import Hero from './components/Hero.js';
import HomeContent from './content/homeContent.js';
import Footer from './components/Footer.js';

const Home = (item) => {

  return (
    <div className="container-fluid">
      <div className="h-[13vh]"></div>
      <div className="-mt-[5vh]"><Hero item={HomeContent}/></div>
      <div><Footer item={HomeContent} /></div>
    </div>
  );
};

export default Home;
