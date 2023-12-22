import React from 'react';
import { FilmListProps } from '../../api/ApiStartW';


const FilmList: React.FC<FilmListProps> = ({ films }) => {
  return (
    <div className=''>
      {films && films.length > 0 ? (
        <ul>
          {films.map((pilot, index) => (
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

export default FilmList;