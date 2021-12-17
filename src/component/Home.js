import LatestArticle from "./LatestArticle";
import ProductRecomendation from "./ProductRecomendation";
import EditorsChoice from "./EditorsChoice";
import LatestVideos from "./LatestVideos";
import TopBrands from "./TopBrands";
import { useEffect, useState } from 'react';
import Api from '../api/Api-female-daily';
import LatestReview from "./LatestReview";
import Trending from "./Trending";
import PopularGroups from "./popularGroups";

const Home = () => {

    const [latestArticleData, setLatestArticleData] = useState(null);
    const [latestReviewData, setLatestRevieweData] = useState(null);
    const [editorsChoiceData, setEditorsChoiceData] = useState(null);

    const fetchApi = () => {
        Api.get('/wp')
            .then(res => {
                const dataArticle = res.data["latest articles"]
                const reviewData = res.data["latest review"]
                const editorData = res.data["editor's choice"]
                generateArticleData(dataArticle);
                generateReviewData(reviewData);
                generateEditorsData(editorData);

            });
        // .catch(err => {
        //     setError(err.message);
        // })
        // .finally(() => {
        //     setLoading(false);
        // });
    }

    const generateEditorsData = (editorData) => {
        let editorArray = [];
        let product = [
            {
                product_title: "JUICE BEAUTY",
                type_product: "Phyto-pigments flawless serum",
                color: "Rosy Beige",
                image_code: 0,
                margin_right: 41,
            },
            {
                product_title: "VAL BY VALERY THOMAS",
                type_product: "Phyto-pigments flawless serum",
                color: "Rosy Beige",
                image_code: 1,
                margin_right: 41,
            },
            {
                product_title: "JUICE BEAUTY",
                type_product: "Phyto-pigments flawless serum",
                color: "",
                image_code: 2,
                margin_right: 41,
            },
            {
                product_title: "JUICE BEAUTY",
                type_product: "Phyto-pigments flawless serum",
                color: "Rosy Beige",
                image_code: 3,
                margin_right: 41,
            },
            {
                product_title: "JUICE BEAUTY",
                type_product: "Phyto-pigments flawless serum",
                color: "Rosy Beige",
                image_code: 4,
                margin_right: 0
            }
        ]
        
        editorData.forEach((element, i) => {
            if (i < 5) {
                element.id = i;
                element.jobs = "Senior Editor"
                element.product = product[i]
                editorArray.push(element);
                i++;
            }

        });
        setEditorsChoiceData(editorArray);
    }

    const generateArticleData = (dataArticle) => {
        let newArray = [];
        dataArticle.forEach((element, i) => {
            if (i < 6) {
                element.id = i;
                newArray.push(element);
                i++;
            }

        });
        setLatestArticleData(newArray);
    }

    const generateReviewData = (dataReview) => {
        let reviewArray = [];
        dataReview.forEach((element, i) => {
            if (i < 2) {
                element.id = i;
                const joinProfile = element.profile.join();
                console.log('join', joinProfile);
                const newProfile = joinProfile.replace(',', ' ')
                console.log('new Profile', newProfile);
                reviewArray.push(element);
                i++;
            }

        });
        setLatestRevieweData(reviewArray);
    }


    useEffect(() => {
        fetchApi();
        //eslint-disable-next-line
    }, []);

    return (
        <div className="home-container">
            {editorsChoiceData && <EditorsChoice editorsChoiceData={editorsChoiceData}></EditorsChoice>}
            <ProductRecomendation></ProductRecomendation>
            {latestArticleData && <LatestArticle latestArticleData={latestArticleData}></LatestArticle>}
            {latestReviewData && <LatestReview lastestReviewData={latestReviewData}></LatestReview>}
            <PopularGroups></PopularGroups>
            <LatestVideos></LatestVideos>
            <Trending></Trending>
            <TopBrands></TopBrands>
        </div>
    )
}

export default Home;
