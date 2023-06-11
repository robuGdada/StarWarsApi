import { useState } from 'react';
import Details from './components/Details';
import "./app.css"
import { starWarsQueryKey, useStarWars } from './hooks';
import { useQueryClient } from '@tanstack/react-query';


const App = () => {
  const {isLoading,isError,data} = useStarWars();

  const queryClient = useQueryClient()
  
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleBack = () => {
    setSelectedCharacter(null);
  };

  const handleStarWarsRefresh = () => {
    queryClient.invalidateQueries(starWarsQueryKey)
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <div>Error occurred</div>;
  }

  if (selectedCharacter) {
    return <Details character={selectedCharacter} onBack={handleBack} />;
  }


  return (
    <>
    <div onClick={() => handleStarWarsRefresh()}>refresh</div>
      {data.map((character, i) => (
        <div key={i} className='container'>
          <div className='character'> {character.name}</div>
          <button className='btn' key={character.name} onClick={() => handleClick(character)}>show info</button>
        </div>
      ))}
    </>
  );
};


export default App;
