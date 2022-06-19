import { createContext } from 'react';

const initialState = {
    results: [],
    loading: false,
    error: false,
    postFavourites: () => { },
}

const CharContext = createContext(initialState);

export default CharContext;
