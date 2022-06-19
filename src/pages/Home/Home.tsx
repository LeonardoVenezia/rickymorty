import { useState } from 'react';
import SearchField from '../../components/SearchField';
import ShowResults from '../../components/ShowResults';
import { getCharactersByName } from '../../services/characters/characters';
import CharContext from '../../contexts/CharContext';
import Layout from '../../components/Layout';
const Home = () => {
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
        <div className="Home">
            <CharContext.Provider value={{ results, loading, error }}>
                <SearchField handleSearch={handleSearch} />
                <ShowResults />
            </CharContext.Provider>
        </div>
    );
};

export default Home;
