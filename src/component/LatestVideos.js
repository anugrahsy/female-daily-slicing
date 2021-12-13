const LatestVideos = () => {
    return (
        <div className="latest-videos-component">
            <div className="container">
                <div className="latest-videos-content section-paddings">
                    <div className="row">
                        <p className="section-title">Latest Videos</p>
                        <div className="col-md-6">
                            <p className="section-description">Watch and Learn, Ladies</p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                          <a href="" style={{textDecoration:"none"}}><p className="section-see-more">See more <i class="fa fa-chevron-right" aria-hidden="true"></i></p></a>
                        </div>
                        {/* <div className="col-md-12">
                        <img src={dummyImage} width="92%"></img>
                    </div> */}
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zOAbzWijCmM" allowfullscreen width="736" height="414"></iframe>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="col-md-12">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zOAbzWijCmM" allowfullscreen width="356" height="196"></iframe>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zOAbzWijCmM" allowfullscreen width="356" height="196"></iframe>
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
