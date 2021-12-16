import { HiChevronRight } from 'react-icons/hi';

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
                        {/* <div className="col-md-12">
                        <img src={dummyImage} width="92%"></img>
                    </div> */}
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zOAbzWijCmM" title="video1" width="736" height="414" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-12">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zOAbzWijCmM" title="video2" width="356" height="196" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/zOAbzWijCmM" title="video3" width="356" height="196" allowFullScreen></iframe>
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
