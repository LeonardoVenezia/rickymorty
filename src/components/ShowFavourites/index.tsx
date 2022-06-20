import { Char } from '../../types/interfaces';

interface Props {
    favourites: Array<Char>;
}

const ShowFavourites = ({ favourites }: Props) => {

    return (
        <ul className='ShowFavourites'>
            {favourites?.map((fav) => (
                <li className={`li--${fav.status}`} key={fav.name}>
                    <img
                        className='img'
                        src={fav.image}
                        alt={fav.name}
                    />
                    <div className='dataCont'>
                        <p className='item--name'>{fav.name}</p>
                        <p className='item'>{fav.species}</p>
                        <p className={`item--${fav.status}`}>{fav.status}</p>
                    </div>
                    <div className='dataCont'>
                        <p className='item'>{fav.origin.name}</p>
                        <p className='item'>{fav.location.name}</p>
                        <p className='item'>{fav.gender}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default ShowFavourites;
