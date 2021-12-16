import productImage from '../assets/img/background-slice.png';
import makeupImage1 from '../assets/img/dummy-img-2.png';
import { AiFillStar } from 'react-icons/ai';

const ProductRecomendation = () => {
    return (
        <div className="product-recomendation-component">
            <div className="product-recomendation-bg" style={{ backgroundImage: `url(${productImage})` }}>
                <div className="container">
                    <div className="product-recomendation-content section-paddings">
                        <div className="row">
                            <div className="col-md-5 mt-5" style={{ paddingRight: "30px" }}>
                                <div className="product-description" style={{ marginLeft: "120px" }}>
                                    <p className="recomendation-title montserrat">Looking for product that are just simply perfect for you ?</p>
                                    <p className="recomendation-description montserrat">Here are some product that we believe match your skin, hair and body! Have we mention that they solve you concern too?</p>
                                </div>
                                <div className="button-wrapper d-flex justify-content-end">
                                    <button className="ms-auto recomendation-button mt-3">See My Matches</button>
                                </div>
                            </div>
                            <div className="col-md-7 mt-4 p-0">
                                <div className="row m-0 p-0">
                                    <div className="col-md-4 p-0">
                                        <div className="card product-card">
                                            <img src={makeupImage1} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto" alt="..." />
                                            <div className="card-body card-body-product mt-0">
                                                <p className="product-category montserrat">Math skin type</p>
                                                {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
                                                <div className="rating mt-2 d-flex align-items-center">
                                                    <span className="rating-value montserrat me-2">4.9</span>
                                                    <div className="product-rating d-flex align-items-center me-2">
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#D0D0D0"} />

                                                    </div>
                                                    <span className="rating-value montserrat">(72)</span>
                                                </div>
                                                <p className="product-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                                <p className="product-text montserrat mt-1">Pure Pressed Blush</p>
                                                <p className="product-text-desc montserrat mt-0">Neutral Rose</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-4 p-0">
                                        <div className="card product-card">
                                            <img src={makeupImage1} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto" alt="..." />
                                            <div className="card-body card-body-product mt-0">
                                                <p className="product-category montserrat">Math skin type</p>
                                                {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
                                                <div className="rating mt-2 d-flex align-items-center">
                                                    <span className="rating-value montserrat me-2">4.9</span>
                                                    <div className="product-rating d-flex align-items-center me-2">
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#D0D0D0"} />

                                                    </div>
                                                    <span className="rating-value montserrat">(72)</span>
                                                </div>
                                                <p className="product-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                                <p className="product-text montserrat mt-1">Pure Pressed Blush</p>
                                                <p className="product-text-desc montserrat mt-0">Neutral Rose</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-0">
                                        <div className="card product-card">
                                            <img src={makeupImage1} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto" alt="..." />
                                            <div className="card-body card-body-product mt-0">
                                                <p className="product-category montserrat">Math skin type</p>
                                                {/* <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon> */}
                                                <div className="rating mt-2 d-flex align-items-center">
                                                    <span className="rating-value montserrat me-2">4.9</span>
                                                    <div className="product-rating d-flex align-items-center me-2">
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#DA254E"} />
                                                        <AiFillStar size={16} color={"#D0D0D0"} />

                                                    </div>
                                                    <span className="rating-value montserrat">(72)</span>
                                                </div>
                                                <p className="product-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                                <p className="product-text montserrat mt-1">Pure Pressed Blush</p>
                                                <p className="product-text-desc montserrat mt-0">Neutral Rose</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //     <div className="latest-videos-component">
        //     <div className="container">
        //         <div className="latest-videos-content section-paddings">
        //             <div className="row">
        //                 <div className="col-md-6">
        //                     <p className="section-description">Watch and Learn, Ladies</p>
        //                 </div>
        //                 <div className="col-md-6">
        //                   <a href="http//dummy.link" style={{textDecoration:"none"}}><p className="section-see-more">See more <i className="fa fa-chevron-right" aria-hidden="true"></i></p></a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default ProductRecomendation;
