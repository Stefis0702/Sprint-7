import React, { createContext, useState, useEffect,useContext, type ReactNode} from 'react';


export interface ShipDetails {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  image: string;
  pilots: string[];
  films: string[];
}



interface NavContextProps {
  
    ships: ShipDetails[];
    loading: boolean;
    loadMoreShips: () => void;
    setSelectedShipDetails: (selectedShip: ShipDetails) => void;
    selectedShipDetails: ShipDetails | null | undefined;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    isUserLoggedIn: boolean;
    setIsUserLoggedIn: (isUserLoggedIn: boolean) => void;
  
  }
  export interface PilotsListProps {
    
    pilots:string[];
    
  }
  export interface FilmListProps {
    
    films:string[];
    
  }
  

const NavContext = createContext<NavContextProps|undefined>(undefined);

export const useNavContext:()=>NavContextProps = ():NavContextProps => {
  const context = useContext(NavContext);
  if (context == null) {
    throw new Error('useNavContext must be used within a NavContextProvider');
  }
  return context;
}

interface NavContextProviderProps {
  children: ReactNode;
}

export const NavContextProvider: React.FC<NavContextProviderProps> = ({ children }) => {
  const [ships, setShips] = useState<ShipDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextPage, setNextPage] = useState<string>('');
  const [selectedShipDetails, setSelectedShipDetails] = useState<ShipDetails | undefined>(undefined);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  


  

  useEffect(() => {
    fetchShips();
  }, []);

  const fetchPilots = async (pilotUrls: string[]): Promise<{ name: string, imageNumber: string }[]> => {
    const pilotPromises = pilotUrls.map(async (url) => {
      const response = await fetch(url);
      const pilotData = await response.json();
      const imageNumber = url.split('/').filter(Boolean).pop() || ''; // Obtén el número de la imagen
      
      return { 
        name: pilotData.name,
        imageNumber: imageNumber
      };
    });
  
    return Promise.all(pilotPromises);
  };
  const fetchShips = (pageUrl = 'https://swapi.dev/api/starships/') => {
    setLoading(true);
    fetch(pageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(async (data) => {
        const uniqueShips: ShipDetails[] = data.results.filter(
          (ship: ShipDetails, index: number, self: ShipDetails[]) =>
            self.findIndex((s) => s.name === ship.name) === index
        );

        const shipsWithPilotsAndFilmsPromises = uniqueShips.map(async (ship: ShipDetails) => {
          const pilotsWithImages = await fetchPilots(ship.pilots);
          const pilots = pilotsWithImages.map(pilot => pilot.name);
          const pilotsImages = pilotsWithImages.map(pilot => `https://starwars-visualguide.com/assets/img/characters/${pilot.imageNumber}.jpg`);
  
          // Lógica similar para obtener los nombres de las películas
          const filmsData = await Promise.all(ship.films.map(async (filmUrl) => {
            const response = await fetch(filmUrl);
            const filmData = await response.json();
            return filmData.title; // o la propiedad que contenga el nombre de la película
          }));
  
          return {
            ...ship,
            image: `https://starwars-visualguide.com/assets/img/starships/${uniqueShips.findIndex((s) => s.name === ship.name) + 1}.jpg`,
            pilots,
            pilotsImages,
            films: filmsData,
          };
        });
  
        const shipsWithPilotsAndFilms = await Promise.all(shipsWithPilotsAndFilmsPromises);
  
        setShips(shipsWithPilotsAndFilms);
  
    
        
        // setShips(
        //   uniqueShips.map((ship: ShipDetails, index: number) => ({
        //     ...ship,
        //     image: `https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`,
            
        //   }))
        // );
  
        setNextPage(data.next);
        setLoading(false);
       
      })
      .catch((error) => {
        console.error('Error fetching ships:', error);
        setLoading(false);
      });
  };

  const fetchMoreShips = () => {
    if (nextPage) {
      setLoading(true);
      fetch(nextPage)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const additionalShips: ShipDetails[] = data.results.filter(
            (ship: ShipDetails, index: number, self: ShipDetails[]) =>
              self.findIndex((s) => s.name === ship.name) === index
          );

          setShips((prevShips) => [
          ...prevShips,
          ...additionalShips.map((ship: ShipDetails, index: number) => ({
            ...ship,
            image: `https://starwars-visualguide.com/assets/img/starships/${prevShips.length + index + 1}.jpg`,
          })),
        ]);

          setNextPage(data.next);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching more ships:', error);
          setLoading(false);
        });
    }
  };

  const loadMoreShips = () => {
    fetchMoreShips();
  };
 

  const contextValue: NavContextProps = {
    ships,
    loading,
    loadMoreShips,
    setSelectedShipDetails,
    selectedShipDetails,
    isLoggedIn,
    setIsLoggedIn,
    isUserLoggedIn,
    setIsUserLoggedIn,

  };
   
  return (
    <NavContext.Provider value={contextValue}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;

