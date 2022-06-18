import { useState } from 'react';
import './App.css';
import SearchField from './components/SearchField';
import ShowResults from './components/ShowResults';
import { getCharactersByName } from './services/characters/characters';
// const Results = createContext({ results: [] });
import Characters from './contexts/charactersContext';

const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (name: string) => {
    setLoading(true);
    const newResults = await getCharactersByName(name);
    newResults ? setResults(newResults) : setError(true);
    setLoading(false);
  };
  return (
    <div className="App">
      <Characters.Provider value={{ results, loading, error }}>
        <SearchField handleSearch={handleSearch} />
        <ShowResults />
      </Characters.Provider>
    </div>
  );
}

export default App;
