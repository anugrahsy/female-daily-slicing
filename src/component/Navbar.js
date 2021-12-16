import FemaleDailyLogo from '../assets/img/female-daily-logo.png';
import menurBurgerIcon from '../assets/img/menu.png';
// import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: "0px" }}>
                <div className="container-fluid" style={{ paddingRight: "0px", paddingLeft: "20px" }}>
                    <a className="navbar-brand" href="/#"><img src={menurBurgerIcon} width="18px" height="18px" className="menu-burger-icon" alt=""></img></a>
                    <a className="navbar-brand" href="/#" style={{ margin: "0px" }}><img src={FemaleDailyLogo} width="154px" height="28px" className="navbar-icon" alt=""></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <input type="text" className="form-control mx-auto" placeholder="Search product, article, brand, etc" style={{ width: "960px", height: "38px" }} />
                        <form className="d-flex">
                            <button className="btn-login">LOGIN / SIGNUP</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="nav-menu">
                <ul className="nav navbar justify-content-center nav-menu-wrapper">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/#">SKINCARE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">MAKEUP</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">BODY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">HAIR</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">FRAGNANCE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">NAILS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">TOOLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">BRANDS</a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;