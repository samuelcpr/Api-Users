import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route element={<AppRoutes />} />
    </BrowserRouter>
  );
};

export default Routes;
