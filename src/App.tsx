import React, { useContext } from 'react';
import NavContextProvider, { NavContext } from './api/ApiStartW';
import ShipList from './components/Ships/ShipList';
import HeaderCom from './components/Header/Header';
import './App.css';



const App= (): JSX.Element => {
  return (
    <NavContextProvider>
      <div className="App bg-image">
        <header>
         <HeaderCom/>
        </header>
        <main>
          <Content />
        </main>
      </div>
    </NavContextProvider>
  );
};

const Content: React.FC = () => {
 
  return (
    <div className="">
      <ShipList />
      
      
    </div>
  );
};

export default App;