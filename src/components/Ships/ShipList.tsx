import React, { useContext } from 'react';
import { NavContext } from '../../api/ApiStartW';
import { ShipDetails } from '../../api/ApiStartW';



const ShipList: React.FC = () => {
  const { ships, setSelectedShipDetails,loadMoreShips } = useContext(NavContext);

  const handleShipClick = (selectedShip: ShipDetails) => {
    if (selectedShip) {
     
      setSelectedShipDetails(selectedShip);
    }
  };

  return (
    <div >
      <div className='max-w-xl'>
        <h1 className="text-4xl font-bold mb-4 text-center">Listado de Naves</h1>
        <ul className="list-none p-0">
        {ships.map((ship, index) => (
            <li key={index} className="mb-2" onClick={() => handleShipClick(ship)}>
              <span className="mr-2 mt-1 text-gray-600">•</span>
              <div>
                <p className="text-xl font-bold mb-2">{ship.name}</p>
                <p>Modelo: {ship.model}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn btn-active btn-neutral" onClick={loadMoreShips}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" /></svg>Ver más</button>
        


    </div>
    </div>
  );
};
export default ShipList;