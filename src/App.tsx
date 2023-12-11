import React from 'react';
import NavContextProvider from './api/ApiStartW';
import ShipList from './components/Ships/ShipList';
import ShipDetails from './components/Ships/ShipDetails';

const App: React.FC = () => {
  return (
    <NavContextProvider>
      <div className="App flex justify-center ">
        <ShipList />
        <ShipDetails />
      </div>
    </NavContextProvider>
  );
};

export default App;