import './index.scss';
import { useState } from 'react';

const CharacterCard = ({ data, postFavourites }) => {
    const month = new Date(data.created).getMonth();
    const year = new Date(data.created).getFullYear();
    const [fav, setFav] = useState(data.favourite);
    const postFav = () => {
        postFavourites(data);
        setFav(true);
    }
    const star = fav
        ? <span className="star" >★</span>
        : <span className="star" onClick={postFav} >☆</span>;
    return (
        <li key={data.id}>
            <div className="CharacterCard">
                <img
                    src={data.image}
                    alt={data.name}
                    className="charImage"
                />
                <div className="charData">
                    {star}
                    <h3 className="charTitle">{data.name}</h3>
                    <p className="charText">Created: {month}/{year}</p>
                    <p className="charText">Species: {data.species}</p>
                    <p className="charText">Status: {data.status}</p>
                </div>
            </div>
        </li>
    );
}

export default CharacterCard;
