import adapter from './adapters/getCharactersByName';

export const getCharactersByName = async (name) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
    const data = await response.json();
    if (response.ok) {
        return adapter(data);
    }
    return false;
};
