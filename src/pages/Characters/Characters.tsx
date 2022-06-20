import { useState, useEffect } from 'react';
import ShowResults from '../../components/ShowResults';
import Layout from '../../components/Layout';
import { getCharactersByName } from '../../services/characters/characters';
import CharContext from '../../contexts/CharContext';
import { useParams } from 'react-router-dom';
import { postFavourites } from '../../services/characters/favourites';
import { Char } from '../../types/interfaces';

const Characters = () => {
    let { name, status } = useParams();
    useEffect(() => {
        (async () => {
            setLoading(true);
            const newResults = await getCharactersByName(name, status);
            newResults ? setResults(newResults) : setError(true);
            setLoading(false);
        })()
    }, [name, status])

    const [results, setResults] = useState<Char[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

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
