import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.scss';

const SearchField = ({ handleSearch }) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/characters', { name: search });
        handleSearch(search);
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
