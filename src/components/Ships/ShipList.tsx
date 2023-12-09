import React, { useEffect, useState } from 'react';
import { fetchStarships } from '../../api/ApiStartW';

interface Ship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  
}

const ShipList: React.FC = () => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);

  useEffect(() => {
    fetchStarships()
      .then((data) => {
        setShips(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleShipClick = (ship: Ship) => {
    setSelectedShip(ship);
  };

  return (
    <div className='flex justify-center '>
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
  
        {selectedShip && (
          <div className="mt-4 border border-black p-4 flex justify-end">
            <div className="max-w-md text-justify text-center">
              <h2 className="text-xl font-bold mb-2">{selectedShip.name}</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
              <p>Model: {selectedShip.model}</p>
              <p>Manufacturer: {selectedShip.manufacturer}</p>
              <p>Cost in credits: {selectedShip.cost_in_credits}</p>
              <p>Length: {selectedShip.length}</p>
              <p>Atmospheric Speed: {selectedShip.max_atmosphering_speed}</p>
              <p>Crew: {selectedShip.crew}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipList;