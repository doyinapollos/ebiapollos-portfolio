/* eslint-disable prettier/prettier */
import React from 'react';
import Home from './Home';
import MediumScreen from './MediumScreen';
import MobileView from './MobileView';

function LandingPage() {
  return (
    <>
      <div className="hidden md:hidden lg:block ">
        <Home />
      </div>{' '}
      <div className="hidden md:block lg:hidden ">
        <MediumScreen />
      </div>{' '}
      <div className="md:hidden lg:hidden ">
        <MobileView />
      </div>{' '}
    </>
  );
}

export default LandingPage;
