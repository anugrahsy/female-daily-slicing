import dummyImage from '../assets/img/dummy-image.png';

const EditorsChoice = () => {
    return (
        <div className="editors-choice-container">
            <div className="container">
                <div className="adds-banner">
                    <div className="col-md-12 mt-3 mb-4">
                        <div className="adds-banner-1 mx-auto d-flex align-items-center justify-content-center">
                            <h3>Top Frame 970x50</h3>
                        </div>
                    </div>
                    <div className="col-md-12 mt-3 mb-5">
                        <div className="adds-banner-2 mx-auto d-flex align-items-center justify-content-center">
                            <h3>Billboard 970x250</h3>
                        </div>
                    </div>
                </div>
                <div className="editors-choice-content section-paddings">
                    <p className="section-title">Editor's Choice</p>
                    <p className="section-description">Curated with love</p>
                    <div className="col-md-12">
                        <img src={dummyImage} width="92%"></img>
                    </div>
                </div>
            </div>

            {/* <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center align-middle" style={{marginTop: "12px"}}>
                        <center>
                            <div className="adds-banner-1">
                                <h3>Top Frame 970x50</h3>
                            </div>
                        </center>
                    </div>
                    <div className="col-md-12 text-center" style={{marginTop: "30px"}}>
                        <center>
                            <div className="adds-banner-2">
                                <h3>Billboard 970x250</h3>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="row" style={{marginTop: "64px", marginBottom: "64px"}}>
                    <div className="editors-choice-content">
                        <h3>Editors Choice</h3>
                        <h4>Curated with love</h4>
                        <div className="col-md-12">
                            <div className="col-md-3" style={{backgroundColor: "gray", height: "250px", padding: "0px"}}>kotak</div>
                            <div className="col-md-3" style={{backgroundColor: "gray", height: "250px", padding: "0px"}}>kotak</div>
                            <div className="col-md-3" style={{backgroundColor: "gray", height: "250px", padding: "0px"}}>kotak</div>
                            <div className="col-md-3" style={{backgroundColor: "gray", height: "250px", padding: "0px"}}>kotak</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default EditorsChoice;
