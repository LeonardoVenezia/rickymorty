
import { useContext } from 'react';
import Characters from '../../contexts/CharContext';

import './index.scss'
const ShowResults = () => {
    const { results, loading, error } = useContext(Characters);
    if (loading) return <p className="ShowResultsLoading">Loading...</p>;
    if (error) return <p className="ShowResultsError">A mysterious error has occurred</p>;
    return (
        <div className="ShowResults">
            <ul className="listResults">
                {results?.map(result => {
                    const month = new Date(result.created).getMonth();
                    const year = new Date(result.created).getFullYear();
                    return (
                        <li key={result.id}>
                            <div className="result">
                                <img
                                    src={result.image}
                                    alt={result.name}
                                    className="charImage"
                                />
                                <div className="charData">
                                    <h3 className="charTitle">{result.name}</h3>
                                    <p className="charText">Created: {month}/{year}</p>
                                    <p className="charText">Species: {result.species}</p>
                                    <p className="charText">Status: {result.status}</p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default ShowResults;