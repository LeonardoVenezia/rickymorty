import './index.scss';
import { useState } from 'react';
import { Char } from '../../types/interfaces';

interface data {
    created: string;
    id: string;
    image: string;
    name: string;
    species: string;
    status: string;
    favourite: boolean;
}

interface props {
    data: Char;
    postFavourites(data: data): void;
}

const CharacterCard = ({ data, postFavourites }: props) => {
    const month = new Date(data.created).getMonth();
    const year = new Date(data.created).getFullYear();

    const [fav, setFav] = useState<boolean>(data.favourite);

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
