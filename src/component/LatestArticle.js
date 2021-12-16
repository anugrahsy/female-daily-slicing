const LatestArticle = (props) => {
    const newDataArticle = props.latestArticleData
    console.log('cekuiuui ', newDataArticle);
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
                        </div>
                    </div>
                    <div className="row"> {
                        newDataArticle.map((data) => (
                            <div className="col-md-4 col-sm-12 mb-3" key={data.id}>
                                <div className="card article-card">
                                    <img src={data.image} className="card-img-top" alt="..." />
                                    <div className="card-body card-body-article mt-3">
                                        <p className="card-text">{data.title}</p>
                                        <p className="autor-text mt-1 d-inline-flex">{data.author}<span className="article-text-time">&nbsp; {'|'} &nbsp; {data.published_at}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestArticle;