import { HiChevronRight } from 'react-icons/hi';
import  thumbnail1 from '../assets/img/video-thumbnail1.png';
import  thumbnail2 from '../assets/img/video-thumbnail2.png';
import  thumbnail3 from '../assets/img/video-thumbnail3.png';

const LatestVideos = () => {
    return (
        <div className="latest-videos-component mt-5">
            <div className="container">
                <div className="latest-videos-content section-paddings">
                    <div className="row">
                        <p className="section-title">Latest Videos</p>
                        <div className="col-md-6">
                            <p className="section-description">Watch and Learn, Ladies</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                          <a href="http//dummy.link" style={{textDecoration:"none"}}><p className="section-see-more">See more <HiChevronRight size={25}/></p></a>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-8">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src={thumbnail1} title="video1" width="736" height="414" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-12">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item " src={thumbnail2} title="video2" width="356" height="196" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={thumbnail3} title="video3" width="356" height="196" allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestVideos;
