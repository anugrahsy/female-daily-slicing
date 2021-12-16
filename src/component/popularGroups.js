import { HiChevronRight } from 'react-icons/hi';

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
                                <img src={"https://image.femaledaily.com/dyn/160/images/user-pics/profile_1626102326331.jpg"} className="card-img-top rounded-circle card-img-popular m-auto p-3" alt="..." />
                                <div className="card-body card-body-popular text-center ps-3 pb-3 pe-3 pt-1">
                                        <p className="popular-title montserrat">Embracer the curl</p>
                                    <div className="popular-icon d-flex justify-content-center mt-3">
                                        <HiChevronRight className="me-3"></HiChevronRight>
                                        <HiChevronRight></HiChevronRight>
                                        <HiChevronRight className="ms-3"></HiChevronRight>
                                    </div>
                                    <p className="popular-text montserrat mt-2">May our curls pop and never stop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card popular-card shadow">
                                <img src={"https://image.femaledaily.com/dyn/160/images/user-pics/profile_1626102326331.jpg"} className="card-img-top rounded-circle card-img-popular m-auto p-3" alt="..." />
                                <div className="card-body card-body-popular text-center ps-3 pb-3 pe-3 pt-1">
                                        <p className="popular-title montserrat">Embracer the curl</p>
                                    <div className="popular-icon d-flex justify-content-center mt-3">
                                        <HiChevronRight className="me-3"></HiChevronRight>
                                        <HiChevronRight></HiChevronRight>
                                        <HiChevronRight className="ms-3"></HiChevronRight>
                                    </div>
                                    <p className="popular-text montserrat mt-2">May our curls pop and never stop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card popular-card shadow">
                                <img src={"https://image.femaledaily.com/dyn/160/images/user-pics/profile_1626102326331.jpg"} className="card-img-top rounded-circle card-img-popular m-auto p-3" alt="..." />
                                <div className="card-body card-body-popular text-center ps-3 pb-3 pe-3 pt-1">
                                        <p className="popular-title montserrat">Embracer the curl</p>
                                    <div className="popular-icon d-flex justify-content-center mt-3">
                                        <HiChevronRight className="me-3"></HiChevronRight>
                                        <HiChevronRight></HiChevronRight>
                                        <HiChevronRight className="ms-3"></HiChevronRight>
                                    </div>
                                    <p className="popular-text montserrat mt-2">May our curls pop and never stop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card popular-card shadow">
                                <img src={"https://image.femaledaily.com/dyn/160/images/user-pics/profile_1626102326331.jpg"} className="card-img-top rounded-circle card-img-popular m-auto p-3" alt="..." />
                                <div className="card-body card-body-popular text-center ps-3 pb-3 pe-3 pt-1">
                                        <p className="popular-title montserrat">Embracer the curl</p>
                                    <div className="popular-icon d-flex justify-content-center mt-3">
                                        <HiChevronRight className="me-3"></HiChevronRight>
                                        <HiChevronRight></HiChevronRight>
                                        <HiChevronRight className="ms-3"></HiChevronRight>
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
