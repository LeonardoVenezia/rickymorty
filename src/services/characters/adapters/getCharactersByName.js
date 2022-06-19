import { getFavourites } from '../favourites';

export default (characters) => {
    const favourites = getFavourites();
    const { results } = characters;
    if (!favourites.length) return results;
    const favList = favourites.map(fav => fav.id);
    const data = results.map((r) => {
        if (favList.includes(r.id)) {
            r.favourite = true;
        }
        return r;
    });
    return data;
};