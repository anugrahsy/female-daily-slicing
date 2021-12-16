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

    // const [userData, setUserData] = useState(null);
    const [latestArticleData, setLatestArticleData] = useState(null);
    const [latestReviewData, setLatestRevieweData] = useState(null);
    const [editorsChoiceData, setEditorsChoiceData] = useState(null);
    // const [userData, setUserData] = useState(null);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);

    const fetchApi = () => {
        Api.get('/wp')
            .then(res => {
                const dataArticle = res.data["latest articles"]
                const reviewData = res.data["latest review"]
                const editorData = res.data["editor's choice"]
                generateArticleData(dataArticle);
                generateReviewData(reviewData);
                generateEditorsData(editorData);

                console.log('data', res.data);
            });
        // .catch(err => {
        //     setError(err.message);
        // })
        // .finally(() => {
        //     setLoading(false);
        // });
    }

    const generateEditorsData = (editorData) => {
        // console.log('BNNNBBNB', dataArticle);
        let editorArray = [];
        editorData.forEach((element, i) => {
            // console.log('banyak', i);
            if (i < 6) {
                element.id = i;
                console.log('element', element);
                editorArray.push(element);
                i++;
            }

        });
        console.log('new array', editorArray);
        setEditorsChoiceData(editorArray);
    }


    const generateArticleData = (dataArticle) => {
        // console.log('BNNNBBNB', dataArticle);
        let newArray = [];
        dataArticle.forEach((element, i) => {
            // console.log('banyak', i);
            if (i < 6) {
                element.id = i;
                console.log('element', element);
                newArray.push(element);
                i++;
            }

        });
        console.log('new array', newArray);
        setLatestArticleData(newArray);
    }

    const generateReviewData = (dataReview) => {
        // console.log('BNNNBBNB', dataReview);
        let reviewArray = [];
        dataReview.forEach((element, i) => {
            // console.log('banyak', i);
            if (i < 2) {
                element.id = i;
                console.log('element', element);
                reviewArray.push(element);
                i++;
            }

        });
        console.log('new array', reviewArray);
        setLatestRevieweData(reviewArray);
    }


    useEffect(() => {
        fetchApi();
        //eslint-disable-next-line
    }, []);

    return (
        console.log('apa isi artikel', latestArticleData),
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
