import { HiChevronRight } from 'react-icons/hi';
import userImg1 from '../assets/img/popular-user1.png';
import userImg2 from '../assets/img/popular-user2.png';
import userImg3 from '../assets/img/popular-user3.png';
import userImg4 from '../assets/img/popular-user4.png';
import cardIconImg1 from '../assets/img/popular-icon1.png';
import cardIconImg2 from '../assets/img/popular-icon2.png';
import cardIconImg3 from '../assets/img/popular-icon3.png';

const PopularGroups = () => {
    return (
        <div className="latest-videos-component mt-5">
            <div className="container">
                <div className="latest-videos-content section-paddings">
                    <div className="row">
                        <p className="section-title">Popular Groups</p>
                        <div className="col-md-6">
                            <p className="section-description">Were the beauty talk are</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <a href="http//dummy.link" style={{ textDecoration: "none" }}><p className="section-see-more">See more <HiChevronRight size={25} /></p></a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-3">
                            <div className="card popular-card shadow">
                                <img src={userImg1} className="card-img-top rounded-circle card-img-popular m-auto p-3" alt="..." />
                                <div className="card-body card-body-popular text-center ps-3 pb-3 pe-3 pt-1">
                                    <p className="popular-title montserrat">Embracer the curl</p>
                                    <div className="popular-icon d-flex justify-content-center mt-3">
                                    <img src={cardIconImg1} className="popular-img-icon me-4" width={25} height={25} alt="" />
                                        <img src={cardIconImg2} className="popular-img-icon" width={25} height={25} alt="" />
                                        <img src={cardIconImg3} className="popular-img-icon ms-4" width={25} height={25} alt="" />
                                    </div>
                                    <p className="popular-text montserrat mt-2">May our curls pop and never stop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card popular-card shadow">
                                <img src={userImg2} className="card-img-top rounded-circle card-img-popular m-auto p-3" alt="..." />
                                <div className="card-body card-body-popular text-center ps-3 pb-3 pe-3 pt-1">
                                    <p className="popular-title montserrat">Embracer the curl</p>
                                    <div className="popular-icon d-flex justify-content-center mt-3">
                                    <img src={cardIconImg1} className="popular-img-icon me-4" width={25} height={25} alt="" />
                                        <img src={cardIconImg2} className="popular-img-icon" width={25} height={25} alt="" />
                                        <img src={cardIconImg3} className="popular-img-icon ms-4" width={25} height={25} alt="" />
                                    </div>
                                    <p className="popular-text montserrat mt-2">May our curls pop and never stop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card popular-card shadow">
                                <img src={userImg3} className="card-img-top rounded-circle card-img-popular m-auto p-3" alt="..." />
                                <div className="card-body card-body-popular text-center ps-3 pb-3 pe-3 pt-1">
                                    <p className="popular-title montserrat">Embracer the curl</p>
                                    <div className="popular-icon d-flex justify-content-center mt-3">
                                    <img src={cardIconImg1} className="popular-img-icon me-4" width={25} height={25} alt="" />
                                        <img src={cardIconImg2} className="popular-img-icon" width={25} height={25} alt="" />
                                        <img src={cardIconImg3} className="popular-img-icon ms-4" width={25} height={25} alt="" />
                                    </div>
                                    <p className="popular-text montserrat mt-2">May our curls pop and never stop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card popular-card shadow">
                                <img src={userImg4} className="card-img-top rounded-circle card-img-popular m-auto p-3" alt="..." />
                                <div className="card-body card-body-popular text-center ps-3 pb-3 pe-3 pt-1">
                                    <p className="popular-title montserrat">Embracer the curl</p>
                                    <div className="popular-icon d-flex justify-content-center mt-3">
                                        <img src={cardIconImg1} className="popular-img-icon me-4" width={25} height={25} alt="" />
                                        <img src={cardIconImg2} className="popular-img-icon" width={25} height={25} alt="" />
                                        <img src={cardIconImg3} className="popular-img-icon ms-4" width={25} height={25} alt="" />
                                    </div>
                                    <p className="popular-text montserrat mt-2">May our curls pop and never stop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularGroups;
