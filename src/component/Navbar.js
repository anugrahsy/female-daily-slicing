import FemaleDailyLogo from '../assets/img/female-daily-logo.png';
import menurBurgerIcon from '../assets/img/menu.png';

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav class="navbar navbar-expand-lg navbar-light" style={{ padding: "0px" }}>
                <div class="container-fluid" style={{ paddingRight: "0px", paddingLeft: "20px" }}>
                    <a className="navbar-brand" href="#"><img src={menurBurgerIcon} width="18px" height="18px" className="menu-burger-icon"></img></a>
                    <a className="navbar-brand" href="#" style={{ margin: "0px" }}><img src={FemaleDailyLogo} width="154px" height="28px" className="navbar-icon"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <input type="text" className="form-control mx-auto" placeholder="Search product, article, brand, etc" style={{ width: "960px", height: "38px" }} />
                        <form class="d-flex">
                            <button className="btn-login">LOGIN / SIGNUP</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="nav-menu">
                <ul class="nav navbar justify-content-center nav-menu-wrapper">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">SKINCARE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">MAKEUP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">BODY</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">HAIR</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FRAGNANCE</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">NAILS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TOOLS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">BRANDS</a>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;