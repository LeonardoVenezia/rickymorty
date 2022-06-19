import { useState, useEffect } from 'react';
import ShowResults from '../../components/ShowResults';
import Layout from '../../components/Layout';
import { getCharactersByName } from '../../services/characters/characters';
import CharContext from '../../contexts/CharContext';
import { useParams } from 'react-router-dom';
import { postFavourites } from '../../services/characters/favourites';

const Characters = () => {
    let { name } = useParams();
    useEffect(() => {
        (async () => {
            setLoading(true);
            const newResults = await getCharactersByName(name);
            newResults ? setResults(newResults) : setError(true);
            setLoading(false);
        })()
    }, [name])

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div>
            <CharContext.Provider value={{ results, loading, error, postFavourites }}>
                <Layout>
                    <ShowResults />
                </Layout>
            </CharContext.Provider>
        </div>
    );
};

export default Characters;
