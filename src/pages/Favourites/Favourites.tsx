import Layout from "../../components/Layout";
import ShowFavourites from "../../components/ShowFavourites";
import { getFavourites } from "../../services/characters/favourites";

const Favourites = () => {
    return (
        <Layout>
            <ShowFavourites favourites={getFavourites()} />
        </Layout>
    );
};

export default Favourites;
