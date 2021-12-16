import  FemaleDailyLogo from '../assets/img/female-daily-logo.png';

const TopBrands = () => {
    return (
        <div className="top-brands-component mt-5 mb-5">
               <div className="container">
                <div className="top-brands-content section-paddings">
                    <div className="row">
                        <p className="section-title">Top Brands</p>
                        <p className="section-description">Wee all know and love</p>
                    </div>
                    <div className="row mt-2 mb-2">
                        <div className="col-md-2">
                            <img src={FemaleDailyLogo} alt="" width="100%"/>
                        </div>
                        <div className="col-md-2">
                            <img src={FemaleDailyLogo} alt="" width="100%"/>
                        </div>
                        <div className="col-md-2">
                            <img src={FemaleDailyLogo} alt="" width="100%"/>
                        </div>
                        <div className="col-md-2">
                            <img src={FemaleDailyLogo} alt="" width="100%"/>
                        </div>
                        <div className="col-md-2">
                            <img src={FemaleDailyLogo} alt="" width="100%"/>
                        </div>
                        <div className="col-md-2">
                            <img src={FemaleDailyLogo} alt="" width="100%"/>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <p className="fw-bold font-montserrat mb-2" style={{fontSize: "23.5px"}}>Female Daily - Find everything you want to know about beauty on female daily</p>
                        <p className="montserrat" style={{fontSize: "18.4px", fontWeight: 430, color: "#232323"}}>Product Review, Rips and Rricks, Rxpert and Consummer Opinion Beauty Tutorials, Discusion, Beauty Workshop nything!. We are here to be your friendly solution to all thing beauty, indside and out!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBrands;