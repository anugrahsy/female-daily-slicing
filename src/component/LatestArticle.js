import  articleImage1 from '../assets/img/article.png';

const LatestArticle = () => {
    return (
        <div className="latest-article">
            <div className="container">
                <div className="row" style={{marginTop: "64px", marginBottom: "10px"}}>
                        <div className="editors-choice-content">
                            <h3>Editors Choice</h3>
                            <h4>Curated with love</h4>
                        </div>
                </div>
                <div className="row">
                    <div className="col-md-4" style={{height: "314px"}}>
                        <div className="article-image">
                            <img src={articleImage1} width="350px" height="180px"></img>
                        </div>
                        <div className="article-text">
                            <h4>The Best Faceof Oil for Sensitive</h4>
                        </div>
                    </div>
                    <div className="col-md-4" style={{height: "314px"}}>
                        <div className="article-image">
                            <img src={articleImage1} width="350px" height="180px"></img>
                        </div>
                        <div className="article-text">
                            <h4>The Best Faceof Oil for Sensitive</h4>
                        </div>
                    </div>
                    <div className="col-md-4" style={{height: "314px"}}>
                        <div className="article-image">
                            <img src={articleImage1} width="350px" height="180px"></img>
                        </div>
                        <div className="article-text">
                            <h4>The Best Faceof Oil for Sensitive</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestArticle;