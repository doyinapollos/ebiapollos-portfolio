/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'src/pages/LandingPage';
import { NonAuthRoutes } from './url';

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />{' '}
      </Routes>{' '}
    </div>
  );
}

export default routers;
