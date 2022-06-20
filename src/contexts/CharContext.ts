import { createContext } from 'react';
import { Char } from '../types/interfaces';

interface Initial {
    results: Array<Char>;
    loading: boolean;
    error: boolean;
    postFavourites: (fav: Char) => void;
}

const initialState = {
    results: [],
    loading: false,
    error: false,
    postFavourites: () => { },
}

const CharContext = createContext<Initial>(initialState);

export default CharContext;
