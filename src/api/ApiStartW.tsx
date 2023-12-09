 export const fetchStarships = (page: number = 1): Promise<any> => {
    return fetch(`https://swapi.dev/api/starships/?page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((Error) => {
        throw new Error('Error fetching starships');
      });
  };


