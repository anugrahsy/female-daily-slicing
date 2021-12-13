import LatestArticle from "./LatestArticle";
import ProductRecomendation from "./ProductRecomendation";
import EditorsChoice from "./EditorsChoice";

const Home = () => {
    return (
        <div className="home">
            <EditorsChoice></EditorsChoice>
            <ProductRecomendation></ProductRecomendation>
            <LatestArticle></LatestArticle>
        </div>
    )
}

export default Home;
