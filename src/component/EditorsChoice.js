import product1 from '../assets/img/editor-product1.png';
import product2 from '../assets/img/editor-product2.png';
import product3 from '../assets/img/editor-product3.png';
import product4 from '../assets/img/editor-product4.png';
import product5 from '../assets/img/editor-product5.png';
import { AiFillStar } from 'react-icons/ai';

const EditorsChoice = (props) => {
    const newEditorChoice = props.editorChoice;
    console.log('cek editor choice ', newEditorChoice);
    return (
        <div className="editors-choice-container">
            <div className="container">
                <div className="section-paddings">
                    <div className="row">
                        <div className="adds-banner">
                            <div className="col-md-12 mt-3 mb-4">
                                <div className="adds-banner-970x50 mx-auto d-flex align-items-center justify-content-center">
                                    <h3>Top Frame 970x50</h3>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3 mb-5">
                                <div className="adds-banner-970x250 mx-auto d-flex align-items-center justify-content-center">
                                    <h3>Billboard 970x250</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="editors-choice-content section-paddings">
                            <p className="section-title">Editor's Choice</p>
                            <p className="section-description">Curated with love</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-2 card-col" style={{marginRight: "41px"}}>
                            <div className="card product-card">
                                <img src={product1} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto p-3" alt="..." />
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
                                        <span className="rating-value montserrat">(7)</span>
                                    </div>
                                    <p className="product-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                    <p className="product-text montserrat mt-1">Pure Pressed Blush</p>
                                    <p className="product-text-desc montserrat mt-0">Neutral Rose</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 card-col" style={{marginRight: "41px"}}>
                            <div className="card product-card">
                                <img src={product2} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto p-3" alt="..." />
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
                                        <span className="rating-value montserrat">(7)</span>
                                    </div>
                                    <p className="product-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                    <p className="product-text montserrat mt-1">Pure Pressed Blush</p>
                                    <p className="product-text-desc montserrat mt-0">Neutral Rose</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 card-col" style={{marginRight: "41px"}}>
                            <div className="card product-card">
                                <img src={product3} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto p-3" alt="..." />
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
                                        <span className="rating-value montserrat">(7)</span>
                                    </div>
                                    <p className="product-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                    <p className="product-text montserrat mt-1">Pure Pressed Blush</p>
                                    <p className="product-text-desc montserrat mt-0">Neutral Rose</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 card-col" style={{marginRight: "41px"}}>
                            <div className="card product-card">
                                <img src={product4} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto p-3" alt="..." />
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
                                        <span className="rating-value montserrat">(7)</span>
                                    </div>
                                    <p className="product-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                    <p className="product-text montserrat mt-1">Pure Pressed Blush</p>
                                    <p className="product-text-desc montserrat mt-0">Neutral Rose</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 card-col" style={{marginRight: "0px"}}>
                            <div className="card product-card">
                                <img src={product5} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto p-3" alt="..." />
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
                                        <span className="rating-value montserrat">(7)</span>
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
    );
}

export default EditorsChoice;
