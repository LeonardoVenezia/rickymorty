import adapter from './adapters/getCharactersByName';

export const getCharactersByName = async (name, status) => {
    const statusParam = status !== 'none' ? `&status=${status}` : '';
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}${statusParam}`);
    const data = await response.json();
    if (response.ok) {
        return adapter(data);
    }
    return false;
};
