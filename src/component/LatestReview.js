import { AiFillStar } from 'react-icons/ai';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import { GoPrimitiveDot } from 'react-icons/go';
import userImg1 from '../assets/img/editor-user-1.png';
import userImg2 from '../assets/img/editor-user-2.png';

const LatestReview = (props) => {
    const newReviewData = props.lastestReviewData;
    return (
        <div className="latest-review-component">
            <div className="container">
                <div className="latest-review-content section-paddings">
                    <div className="row">
                        <p className="section-title">Latest Review</p>
                        <div className="col-md-6">
                            <p className="section-description">So you can make better purchase decision</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-start">
                            <a href="http//dummy.link" style={{ textDecoration: "none" }}><p className="section-see-more ms-3">See more &nbsp; <HiChevronRight size={25} /></p></a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-8">
                            <div className="row">
                                {newReviewData.map((data) => (
                                    <div className="col-md-6" key={data.id}>
                                        <div className="card p-3 review-card">
                                            <div className="card-review-header d-flex">
                                                <div className="image"> <img src={data.product.image} className="rounded-circle mt-auto" alt="" width="60" /> </div>
                                                <div className="header-card-text" style={{ marginLeft: "15px" }}>
                                                    <div className="d-flex flex-row mb-1">
                                                        <span className="review-card-title montserrat">{data.product.name}</span>
                                                    </div>
                                                    <div>
                                                        <p className="review-card-text montserrat">{data.product.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="card-review-line mt-2"></hr>
                                            <div className="rating d-flex align-items-center">
                                                <div className="review-rating d-flex align-items-center me-2">
                                                    <AiFillStar size={16} color={"#DA254E"} />
                                                    <AiFillStar size={16} color={"#DA254E"} />
                                                    <AiFillStar size={16} color={"#DA254E"} />
                                                    <AiFillStar size={16} color={"#DA254E"} />
                                                    <AiFillStar size={16} color={"#D0D0D0"} />
                                                </div>
                                                <span className="ms-auto revire-time-tex montserrat">2 Hours ago</span>
                                            </div>
                                            <div className="card-body card-body-article mt-3 mb-3">
                                                <p className="card-review-description montserrat">{data.comment} ... <span className="read-more">Read more</span></p>
                                            </div>
                                            <div className="testimoni-user justify-content-center text-center">
                                                <div className="testimoni-profile">
                                                    <img src={data.id === 0 ? userImg2 : (data.id === 1 ? userImg1 : "")} className="rounded-circle mt-auto" alt="" width="60" />
                                                </div>
                                                <div className="testimoni-content">
                                                    <h6 className="mt-3 review-author">{data.user}</h6>
                                                    <p className="author-text">{data.profile.join().replace(',', ' ').replace(',', ' ').replace(',', ' ')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="row" style={{marginTop: "130px"}}>
                                <div className="slide-item d-flex justify-content-center">
                                    <div className="slide-wraper d-flex align-items-center me-4">
                                        <HiChevronLeft className="slide-arrow-right m-2" size={20} color={"#F4BEC9"}></HiChevronLeft>
                                        <GoPrimitiveDot className="dot-arrow-1 m-2" color={"#DB284E"}></GoPrimitiveDot>
                                        <GoPrimitiveDot className="dot-arrow-2 m-2" color={"#F4BEC9"}></GoPrimitiveDot>
                                        <GoPrimitiveDot className="dot-arrow-2 m-2" color={"#F4BEC9"}></GoPrimitiveDot>
                                        <GoPrimitiveDot className="dot-arrow-2 m-2" color={"#F4BEC9"}></GoPrimitiveDot>
                                        <GoPrimitiveDot className="dot-arrow-2 m-2" color={"#F4BEC9"}></GoPrimitiveDot>
                                        <HiChevronRight className="slide-arrow-ledt m-2" size={20} color={"#DB284E"}></HiChevronRight>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="adds-banner mb-5">
                                <div className="col-md-12">
                                    <div className="adds-banner-300x250 ms-auto align-items-center d-flex justify-content-center">
                                        <h3>Mr2<br /> 970x50</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestReview;
