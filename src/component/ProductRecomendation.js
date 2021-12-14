import productImage from '../assets/img/background-slice.png';
import articleImage1 from '../assets/img/article.png';

const ProductRecomendation = () => {
    return (
        // <div className="product-recomendation-component">
        //     <div className="row poduct-wrapper" style={{ backgroundImage: `url(${productImage})` }}>
        //         <div className="col-md-6">hueue</div>
        //             <div className="col-md-2">
        //                 <div className="card article-card">
        //                     <img src={articleImage1} className="card-img-top" alt="..." />
        //                     <div className="card-body card-body-article mt-3">
        //                         <p className="card-text">9 Best face oil for sensitive skin</p>
        //                         <p className="autor-text mt-1 d-inline-flex">{'Username'} &nbsp; {'|'} &nbsp; <p className="article-text-time">{'2 hours ago'}</p></p>
        //                         {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        //                     </div>
        //                 </div>
        //             </div>
        //     </div>
        // </div>
        <div className="product-recomendation-component">
            <div className="product-recomendation-bg" style={{ backgroundImage: `url(${productImage})` }}>
                <div className="product-recomendation-content section-paddings">
                    <div className="row">
                        <div className="col-md-6"><h4>huehue</h4></div>
                        <div className="col-md-2">
                            <div className="card article-card" style={{width: "auto"}}>
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

export default ProductRecomendation;
