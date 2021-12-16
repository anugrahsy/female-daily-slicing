import { AiFillStar } from 'react-icons/ai';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { GoPrimitiveDot } from 'react-icons/go';
import product1 from '../assets/img/trending-product1.png';
import product2 from '../assets/img/trending-product2.png';
import product3 from '../assets/img/trending-product3.png';
import product4 from '../assets/img/trending-product4.png';
import product5 from '../assets/img/trending-product5.png';
import product6 from '../assets/img/trending-product6.png';

const Trending = () => {
    return (
        <div className="trending-component mt-5">
            <div className="container">
                <div className="trending-content section-paddings">
                    <div className="row">
                        <p className="section-title">Trending this week</p>
                        <div className="col-md-6">
                            <p className="section-description">See our weekly most reviewed products</p>
                        </div>
                        {/* <div className="col-md-6 d-flex justify-content-end">
                            <a href="http//dummy.link" style={{ textDecoration: "none" }}><p className="section-see-more">See more <HiChevronRight size={25} /></p></a>
                        </div> */}
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-2 p-0">
                            <div className="card trending-card">
                                <img src={product1} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-trending m-auto" alt="..." />
                                <div className="card-body card-body-trending mt-0">
                                    <div className="rating mt-2 d-flex align-items-center">
                                        <span className="rating-value montserrat me-2">4.9</span>
                                        <div className="trending-rating d-flex align-items-center me-2">
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#D0D0D0"} />

                                        </div>
                                        <span className="rating-value montserrat">(7)</span>
                                    </div>
                                    <p className="trending-title montserrat mt-2">SKINCEUTICALS</p>
                                    <p className="trending-text montserrat mt-1">C E Ferulic</p>
                                    <p className="trending-text-desc montserrat mt-0"></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 p-0">
                            <div className="card trending-card">
                                <img src={product2} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-trending m-auto" alt="..." />
                                <div className="card-body card-body-trending mt-0">
                                    <div className="rating mt-2 d-flex align-items-center">
                                        <span className="rating-value montserrat me-2">4.9</span>
                                        <div className="trending-rating d-flex align-items-center me-2">
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#D0D0D0"} />

                                        </div>
                                        <span className="rating-value montserrat">(72)</span>
                                    </div>
                                    <p className="trending-title montserrat mt-2">JUICE BEAUTY</p>
                                    <p className="trending-text montserrat mt-1">Phyto-pigmentss<br />flawless serum ...</p>
                                    <p className="trending-text-desc montserrat mt-0">Rosy Beige</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 p-0">
                            <div className="card trending-card">
                                <img src={product3} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-trending m-auto" alt="..." />
                                <div className="card-body card-body-trending mt-0">
                                    <div className="rating mt-2 d-flex align-items-center">
                                        <span className="rating-value montserrat me-2">4.9</span>
                                        <div className="trending-rating d-flex align-items-center me-2">
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#D0D0D0"} />

                                        </div>
                                        <span className="rating-value montserrat">(72)</span>
                                    </div>
                                    <p className="trending-title montserrat mt-2">JUICE BEAUTY</p>
                                    <p className="trending-text montserrat mt-1">Pure Pressed Blush</p>
                                    <p className="trending-text-desc montserrat mt-0">Neutral Rose</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 p-0">
                            <div className="card trending-card">
                                <img src={product4} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-trending m-auto" alt="..." />
                                <div className="card-body card-body-trending mt-0">
                                    <div className="rating mt-2 d-flex align-items-center">
                                        <span className="rating-value montserrat me-2">4.9</span>
                                        <div className="trending-rating d-flex align-items-center me-2">
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#D0D0D0"} />

                                        </div>
                                        <span className="rating-value montserrat">(72)</span>
                                    </div>
                                    <p className="trending-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                    <p className="trending-text montserrat mt-1">Pure Pressed Blush</p>
                                    <p className="trending-text-desc montserrat mt-0">Neutral Rose</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 p-0">
                            <div className="card trending-card">
                                <img src={product5} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-trending m-auto" alt="..." />
                                <div className="card-body card-body-trending mt-0">
                                    <div className="rating mt-2 d-flex align-items-center">
                                        <span className="rating-value montserrat me-2">4.9</span>
                                        <div className="trending-rating d-flex align-items-center me-2">
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#D0D0D0"} />

                                        </div>
                                        <span className="rating-value montserrat">(72)</span>
                                    </div>
                                    <p className="trending-title montserrat mt-2">SKIN CEUTICHALS</p>
                                    <p className="trending-text montserrat mt-1">C E Ferulic</p>
                                    {/* <p className="trending-text-desc montserrat mt-0">Neutral Rose</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 p-0">
                            <div className="card trending-card">
                                <img src={product6} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-trending m-auto" alt="..." />
                                <div className="card-body card-body-trending mt-0">
                                    <div className="rating mt-2 d-flex align-items-center">
                                        <span className="rating-value montserrat me-2">4.9</span>
                                        <div className="trending-rating  d-flex align-items-center me-2">
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#DA254E"} />
                                            <AiFillStar size={16} color={"#D0D0D0"} />

                                        </div>
                                        <span className="rating-value montserrat">(72)</span>
                                    </div>
                                    <p className="trending-title montserrat mt-2">VAL BY VALERY THOMAS</p>
                                    <p className="trending-text montserrat mt-1">Phyto-pigmentss<br />flawless serum ...</p>
                                    <p className="trending-text-desc montserrat mt-0">Rody Beige</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="slide-item d-flex justify-content-center">
                            <div className="slide-wraper d-flex align-items-center">
                                <HiChevronLeft className="slide-arrow-right m-2" size={20} color={"#F4BEC9"}></HiChevronLeft>
                                <GoPrimitiveDot className="dot-arrow-1 m-2" color={"#DB284E"}></GoPrimitiveDot>
                                <GoPrimitiveDot className="dot-arrow-2 m-2" color={"#F4BEC9"}></GoPrimitiveDot>
                                <HiChevronRight className="slide-arrow-left m-2" size={20} color={"#DB284E"}></HiChevronRight>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending;
