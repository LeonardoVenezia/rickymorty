import './index.scss'
const CharacterCard = ({ data }) => {
    const month = new Date(data.created).getMonth();
    const year = new Date(data.created).getFullYear();
    return (
        <li key={data.id}>
            <div className="CharacterCard">
                <img
                    src={data.image}
                    alt={data.name}
                    className="charImage"
                />
                <div className="charData">
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
