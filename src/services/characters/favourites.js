export const getFavourites = () => JSON.parse(localStorage.getItem('favourites')) || [];

export const postFavourites = (fav) => {
    const currentFavs = getFavourites();
    const newCurrentFavs = JSON.stringify([...currentFavs, fav]);
    localStorage.setItem('favourites', newCurrentFavs);
    return null;
};
