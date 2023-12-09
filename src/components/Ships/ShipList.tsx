import React, { useEffect, useState } from 'react';
import { fetchStarships } from '../../api/ApiStartW';

interface Ship {
  name: string;
  model: string;
  
}

const ShipList: React.FC = () => {
  const [ships, setShips] = useState<Ship[]>([]);

  useEffect(() => {
    fetchStarships()
      .then((data) => {
        setShips(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
    <h1 className="text-2xl font-bold mb-4">Listado de Naves</h1>
    <ul className="list-none p-0">
      {ships.map((ship, index) => (
        <li key={index} className="mb-2 flex items-start">
          <span className="mr-2 mt-1 text-gray-600">•</span>
          <div>
            <p>Nombre: {ship.name}</p>
            <p>Modelo: {ship.model}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default ShipList;