import { createContext } from 'react';

const initialState = {
    results: [],
    loading: false,
    error: false,
}

const Characters = createContext(initialState);

export default Characters;
