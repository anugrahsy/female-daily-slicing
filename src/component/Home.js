import LatestArticle from "./LatestArticle";
import ProductRecomendation from "./ProductRecomendation";
import EditorsChoice from "./EditorsChoice";
import LatestVideos from "./LatestVideos";

const Home = () => {
    return (
        <div className="home">
            <EditorsChoice></EditorsChoice>
            <ProductRecomendation></ProductRecomendation>
            <LatestArticle></LatestArticle>
            <LatestVideos></LatestVideos>
        </div>
    )
}

export default Home;
