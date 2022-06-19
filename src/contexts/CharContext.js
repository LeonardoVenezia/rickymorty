import { createContext } from 'react';

const initialState = {
    results: [],
    loading: false,
    error: false,
}

const CharContext = createContext(initialState);

export default CharContext;
