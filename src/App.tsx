
import ShipList from './components/Ships/ShipList';
import HeaderCom from './components/Header/Header';
import './App.css';



const App= (): JSX.Element => {
  return (
    
      <div className="App bg-image ">
        
        <header>
         <HeaderCom/>
        </header>
        <main>
          <Content />
        </main>
      </div>
  
  );
};

const Content = (): JSX.Element => {
 
  return (
    <div className="">
      <ShipList />
      
      
    </div>
  );
};

export default App;