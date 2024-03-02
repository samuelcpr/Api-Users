import React from 'react';
import AppRoutes from './AppRoutes';
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <UserProvider>
      <div>
        <AppRoutes />
      </div>
    </UserProvider>
  );
}

export default App;
