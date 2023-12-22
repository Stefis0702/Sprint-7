import React from 'react';
import { PilotsListProps } from '../../api/ApiStartW';


const PilotsList: React.FC<PilotsListProps> = ({ pilots }) => {
  return (
    <div className=''>
      {pilots && pilots.length > 0 ? (
        <ul>
          {pilots.map((pilot, index) => (
            <li key={index}>
              {pilot}
              
            </li>
          ))}
        </ul>
      ) : (
        <p>Pilots not available</p>
      )}
    </div>
  );
};

export default PilotsList;