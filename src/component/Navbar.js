import  FemaleDailyLogo from '../assets/img/female-daily-logo.png';
import  menurBurgerIcon from '../assets/img/menu.png';

const Navbar = () => {
    return (
        <div className="navbar-component">
            <nav className="navbar" style={{height: "62px", border: "none", margin: "0px"}}>
                <div>

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#" style={{paddingTop: "22px", paddingLeft: "22px", paddingRight: "22px"}}><img src={menurBurgerIcon} width="18px" height="18px" className="menu-burger-icon"></img></a>
                        <a className="navbar-brand" href="#" style={{paddingTop: "17px", paddingLeft: "0px"}}><img src={FemaleDailyLogo} width="154px" height="28px" className="navbar-icon"></img></a>
                    </div>

                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        {/* <ul class="nav navbar-nav
                            <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">Link</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul> */}
                        <form className="navbar-form navbar-left" style={{marginTop: "12px"}}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search product, article, brand, etc" style={{width: "944px", height: "38px"}} />
                            </div>
                            {/* <button type="submit" className="btn btn-default">Submit</button> */}
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            {/* <li><a href="#">Link</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a href="#">Separated link</a></li>
                                </ul>
                            </li> */}
                            <li>
                                {/* <button className="btn-login" style={{width: "222px", height: "62px", color: "white", backgroundColor: "#DA254E", border: "none", display: "flex", textAlign: "center"}}>LOGIN / SIGNUP</button> */}
                                <button className="btn-login">LOGIN / SIGNUP</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="nav-menu">
                <div className="menu-wrapper" style={{marginTop: "3px"}}>
                <a href="/home/">SKIN CARE</a>
                <a href="/home/">MAKE UP</a>
                <a href="/home/">BODY</a>
                <a href="/home/">HAIR</a>
                <a href="/home/">FRAGNANCE</a>
                <a href="/home/">NAILS</a>
                <a href="/home/">TOOLS</a>
                <a href="/home/">BRANDS</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;