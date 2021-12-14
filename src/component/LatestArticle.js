import articleImage1 from '../assets/img/article.png';

const LatestArticle = () => {
    return (
        <div className="latest-article-component mt-5 mb-5">
            <div className="container">
                <div className="adds-banner mb-5">
                    <div className="col-md-12">
                        <div className="adds-banner-970x250 mx-auto d-flex align-items-center justify-content-center">
                            <h3>Top Frame 970x50</h3>
                        </div>
                    </div>
                </div>
                <div className="latest-article-content section-paddings">
                    <div className="row">
                        <p className="section-title">Latest Article</p>
                        <div className="col-md-6">
                            <p className="section-description">So you kan make better purchase decision</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <a href="" style={{ textDecoration: "none" }}><p className="section-see-more">See more <i class="fa fa-chevron-right" aria-hidden="true"></i></p></a>
                        </div>
                        {/* <div className="col-md-12">
                    <img src={dummyImage} width="92%"></img>
                </div> */}
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card article-card">
                                <img src={articleImage1} className="card-img-top" alt="..." />
                                <div className="card-body card-body-article mt-3">
                                    <p className="card-text">9 Best face oil for sensitive skin</p>
                                    <p className="autor-text mt-1 d-inline-flex">{'Username'} &nbsp; {'|'} &nbsp; <p className="article-text-time">{'2 hours ago'}</p></p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card article-card">
                                <img src={articleImage1} className="card-img-top" alt="..." />
                                <div className="card-body card-body-article mt-3">
                                    <p className="card-text">9 Best face oil for sensitive skin</p>
                                    <p className="autor-text mt-1 d-inline-flex">{'Username'} &nbsp; {'|'} &nbsp; <p className="article-text-time">{'2 hours ago'}</p></p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card article-card">
                                <img src={articleImage1} className="card-img-top" alt="..." />
                                <div className="card-body card-body-article mt-3">
                                    <p className="card-text">9 Best face oil for sensitive skin</p>
                                    <p className="autor-text mt-1 d-inline-flex">{'Username'} &nbsp; {'|'} &nbsp; <p className="article-text-time">{'2 hours ago'}</p></p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card article-card">
                                <img src={articleImage1} className="card-img-top" alt="..." />
                                <div className="card-body card-body-article mt-3">
                                    <p className="card-text">9 Best face oil for sensitive skin</p>
                                    <p className="autor-text mt-1 d-inline-flex">{'Username'} &nbsp; {'|'} &nbsp; <p className="article-text-time">{'2 hours ago'}</p></p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card article-card">
                                <img src={articleImage1} className="card-img-top" alt="..." />
                                <div className="card-body card-body-article mt-3">
                                    <p className="card-text">9 Best face oil for sensitive skin</p>
                                    <p className="autor-text mt-1 d-inline-flex">{'Username'} &nbsp; {'|'} &nbsp; <p className="article-text-time">{'2 hours ago'}</p></p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card article-card">
                                <img src={articleImage1} className="card-img-top" alt="..." />
                                <div className="card-body card-body-article mt-3">
                                    <p className="card-text">9 Best face oil for sensitive skin</p>
                                    <p className="autor-text mt-1 d-inline-flex">{'Username'} &nbsp; {'|'} &nbsp; <p className="article-text-time">{'2 hours ago'}</p></p>
                                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestArticle;