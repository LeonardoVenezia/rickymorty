import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';

const SearchField = () => {
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('none');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/characters/${search}/${status}`);
    }

    const handleSelect = (e) => {
        setStatus(e.target.value);
    };

    return (
        <header className="SearchField">

            <form className="form" onSubmit={handleSubmit}>
                <div className="firstField">
                    <input
                        className="bar"
                        type="text"
                        placeholder="Search by name"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <input
                        className="search"
                        type="submit"
                        value="search"
                    />
                </div>
                <div className="secondField">
                    <select onChange={handleSelect} className="status">
                        <option value="none">None</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <Link to="/favourites">
                        <button className="favourites">Favourites</button>
                    </Link>
                </div>
            </form>
        </header>
    );
};

export default SearchField;
