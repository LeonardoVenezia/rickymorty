import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss';

const SearchField = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        navigate(`/characters/${search}`);
    }
    return (
        <header className="SearchField">

            <form className="form" onSubmit={handleSubmit}>
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
            </form>
        </header>
    );
};

export default SearchField;
