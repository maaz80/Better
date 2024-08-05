import React from 'react';
import Stories from '../components/Stories';
import Questions from '../components/Questions';
import Footer from '../components/Footer';
import Front from '../components/Front';

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <div id='home' className='section'>
        <Front />
      </div>
      <div id='stories' className='section'>
        <Stories />
      </div>
      <div id='questions' className='section'>
        <Questions />
      </div>
      <div id='Footer' className='section'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
