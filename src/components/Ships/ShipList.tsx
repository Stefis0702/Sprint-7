import { useState } from "react";
import { useNavContext } from "../../api/ApiStartW";
import { ShipDetails } from "../../api/ApiStartW";
import PilotsList from "../Pilots/Pilots";
import FilmList from "../Films/Films";

const ShipList = (): JSX.Element => {
  const { ships, setSelectedShipDetails, loadMoreShips } = useNavContext();
  const [selectedShip, setSelectedShip] = useState<ShipDetails | null>(null);

  const handleShipClick = (selectedShip: ShipDetails) => {
    setSelectedShipDetails(selectedShip);
    setSelectedShip(selectedShip);
  };

  return (
    <div className="max-w-6xl mt-4 mx-auto h-full text-xl">
      {selectedShip ? (
        <>
          <div className="border-t-2 border-b-2 text-xl text-white">STARSHIP</div>
          <div className="flex bg-neutral-900">
            <div className="flex flex-1  justify-end items-center ">
              <img
                src={selectedShip.image}
                alt={selectedShip.name}
                className="h-full"
                onError={(e) =>
                  (e.currentTarget.src = "./src/img/PlaceHolder.png")
                }
              />
            </div>

            <div className="flex-1 p-4">
              <p className="text-xl font-bold mb-2">{selectedShip.name}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus
              </p>
              <p>Modelo: {selectedShip.model}</p>
              <p>Manufacturer: {selectedShip.manufacturer}</p>
              <p>Cost in credits: {selectedShip.cost_in_credits}</p>
              <p>Length: {selectedShip.length}</p>
              <p>Atmospheric Speed: {selectedShip.max_atmosphering_speed}</p>
              <p>Crew: {selectedShip.crew}</p>
              <button
                className="btn btn-outline text-white  mt-5 self-end "
                onClick={() => setSelectedShip(null)}
              >
                Volver
              </button>
            </div>
          </div>
          <div className="border-t-2 border-b-2 text-xl text-white ">PILOTS</div>
          <div className="flex-1 p-4 flex bg-neutral-900">
          <PilotsList  pilots={selectedShip.pilots} />      
           </div>
           <div className="border-t-2 border-b-2 text-xl text-white ">FILMS</div>
          <div className="flex-1 p-4 flex bg-neutral-900">
          <FilmList  films={selectedShip.films} />      
           </div>
           
          
        </>
      ) : (
        <ul className="list-none p-0">
          {ships.map((ship, index) => (
            <li
              key={index}
              className="mb-2"
              onClick={() => handleShipClick(ship)}
            >
              <div className="bg-neutral-900 p-4">
                <p className="text-l font-bold mb-2">{ship.name}</p>
                <p>Modelo: {ship.model}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      {!selectedShip && ( // Si no hay nave seleccionada, mostrar el botón de ver más
        <button
          className="btn btn-outline text-white mt-5"
          onClick={loadMoreShips}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
          Ver más
        </button>
      )}
    </div>
  );
};

export default ShipList;
