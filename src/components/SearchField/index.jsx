import { useState } from 'react';
import './index.scss';

const SearchField = ({ handleSearch }) => {
    const [search, setSearch] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
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
