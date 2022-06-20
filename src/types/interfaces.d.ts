import './index.scss';

interface Origin {
    name: string;
}

interface Location {
    name: string;
}

export interface Char {
    id: string;
    name: string;
    status: string;
    image: string;
    species: string;
    origin: Origin;
    location: Location;
    gender: string;
    created: string;
    favourite: boolean;
}
