import facebookIcon from '../assets/img/social-icon1.png';
import twitterIcon from '../assets/img/social-icon2.png';
import instagramIcon from '../assets/img/social-icon3.png';
import youtubeIcon from '../assets/img/social-icon4.png';
import FemaleDailyLogo from '../assets/img/female-daily-logo.png';

const Footer = () => {
    return (
        <div id="id-footer" className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-row1">
                    <ul className="link-menu">
                        <li><a href="/" target="/">About Us</a></li>
                        <li><a href="/">Feedback</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                    <ul className="link-menu">
                        <li><a href="/">Terms &amp; Conditions</a></li>
                        <li><a href="/" target="/">Privacy Policy</a></li>
                        <li><a href="/" target="/">Help</a></li>
                    </ul>
                    <ul className="link-menu">
                        <li><a href="/">Awards</a></li>
                        <li><a href="/">Newsletter</a></li>
                    </ul>
                    <div className="footer-download">
                        <p className="footer-download-text">Download Our Mobile App</p>
                        <div className="footer-download-store">
                            <a href="https://itunes.apple.com/id/app/female-daily-beauty-review/id1160742672?l=id&amp;mt=8"><img src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/btn_appstore.png" alt="Button Appstore"></img></a>
                            <a href="https://play.google.com/store/apps/details?id=com.fdbr.android&amp;hl=en_GB"><img src="https://s3-ap-southeast-1.amazonaws.com/assets.femaledaily.com/web-assets/btn_playstore.png" alt="Button Playstore"></img></a>
                        </div>
                    </div>
                </div>
                <div className="footer-row2">
                    <div className="col-md-6">
                        <img className="female-footer-logo" src={FemaleDailyLogo} width={154} height={28} alt=""></img>
                        <p className="mt-2">Copyright © 2015 Female Daily Network ∙ All the rights reserved</p>
                    </div>
                    <div className="col-md-6">
                        <div className="social-container d-flex justify-content-xl-end" style={{marginRight: "120px"}}>
                            <a href="https://www.facebook.com/FemaleDailyNetwork/" className="social-footer" aria-label="Facebook"><img src={facebookIcon} width={30} height={30} alt=""></img></a>
                            <a href="https://twitter.com/femaledaily" className="social-footer" aria-label="Twitter"><img src={twitterIcon} width={30} height={30} alt=""></img></a>
                            <a href="https://www.instagram.com/femaledailynetwork/" className="social-footer" aria-label="Instagram"><img src={instagramIcon} width={30} height={30} alt=""></img></a>
                            <a href="https://www.youtube.com/user/FemaleDailyNetwork" className="social-footer" aria-label="Youtube"><img src={youtubeIcon} width={30} height={30} alt=""></img></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-add">
            <div className="adds-banner">
                            <div className="col-md-12 mt-3">
                                <div className="adds-banner-970x50 mx-auto d-flex align-items-center justify-content-center">
                                    <h3>Top Frame 970x50,486x60,320x50</h3>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default Footer;
