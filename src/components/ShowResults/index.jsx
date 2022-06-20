
import { useContext } from 'react';
import Characters from '../../contexts/CharContext';
import CharacterCard from '../CharacterCard';
import './index.scss';

const ShowResults = () => {
    const { results, loading, error, postFavourites } = useContext(Characters);
    if (loading) return <p className="ShowResultsLoading">Loading...</p>;
    if (error) return <p className="ShowResultsError">A mysterious error has occurred</p>;

    return (
        <div className="ShowResults">
            <ul className="listResults">
                {results?.map(result => (
                    <CharacterCard
                        data={result}
                        postFavourites={postFavourites}
                        key={result.name}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ShowResults;