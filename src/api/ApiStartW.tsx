import React, { createContext, useState, useEffect, ReactElement } from 'react';


export interface ShipDetails {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
}

interface NavContextProps {
  
    ships: ShipDetails[];
    loading: boolean;
    loadMoreShips: () => void;
    setSelectedShipDetails: (selectedShip: ShipDetails) => void;
    selectedShipDetails: ShipDetails | null | undefined;
  }

export const NavContext = createContext<NavContextProps>({
  ships: [],
  loading: true,
  loadMoreShips: () => {},
  setSelectedShipDetails: () => {},
  selectedShipDetails: null,
});

const NavContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [ships, setShips] = useState<ShipDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextPage, setNextPage] = useState<string>('');
  const [selectedShipDetails, setSelectedShipDetails] = useState<ShipDetails | undefined>(undefined);

  useEffect(() => {
    fetchShips();
  }, []);

  const fetchShips = (pageUrl = 'https://swapi.dev/api/starships/') => {
    setLoading(true);
    fetch(pageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const uniqueShips: ShipDetails[] = data.results.filter(
          (ship: ShipDetails, index: number, self: ShipDetails[]) =>
            self.findIndex((s) => s.name === ship.name) === index
        );
        setShips(uniqueShips);
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
          setShips((prevShips) => [...prevShips, ...additionalShips]);
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
  };
  console.log('Selected Ship Details:', selectedShipDetails);
  return (
    <NavContext.Provider value={contextValue}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContextProvider;

