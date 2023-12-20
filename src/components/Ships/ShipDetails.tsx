import { useNavContext} from '../../api/ApiStartW';



const ShipDetailsCom: React.FC = () => {
  const { selectedShipDetails } = useNavContext();
  


  return (
    <div className="max-w-4xl mt-4 mx-auto ">
      {selectedShipDetails ? (
        <div className="mt-4 border border-black p-4 flex justify-end">
        <div className="max-w-md text-justify text-center">
          <h2 className="text-xl font-bold mb-2">{selectedShipDetails.name}</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus</p>
              <p>Model: {selectedShipDetails.model}</p>
              <p>Manufacturer: {selectedShipDetails.manufacturer}</p>
              <p>Cost in credits: {selectedShipDetails.cost_in_credits}</p>
              <p>Length: {selectedShipDetails.length}</p>
              <p>Atmospheric Speed: {selectedShipDetails.max_atmosphering_speed}</p>
              <p>Crew: {selectedShipDetails.crew}</p>
          
          
        </div>
      </div>
      ) : (
       null
      )}
    </div>

  );
};

export default ShipDetailsCom;