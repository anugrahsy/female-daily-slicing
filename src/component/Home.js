import LatestArticle from "./LatestArticle";
import ProductRecomendation from "./ProductRecomendation";
import EditorsChoice from "./EditorsChoice";
import LatestVideos from "./LatestVideos";
import TopBrands from "./TopBrands";

const Home = () => {
    return (
        <div className="home">
            <EditorsChoice></EditorsChoice>
            <ProductRecomendation></ProductRecomendation>
            <LatestArticle></LatestArticle>
            <LatestVideos></LatestVideos>
            <TopBrands></TopBrands>
        </div>
    )
}

export default Home;
