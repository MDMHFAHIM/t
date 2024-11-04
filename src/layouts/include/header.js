import * as React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link, useLocation, } from 'react-router-dom';
import { logout } from '../../Api/AllApi'


function Header() {
    const navigate = useNavigate();
    const handelLogout = () => {
        logout();
        navigate('/login');
    }



    {/*for link active */ }
    const location = useLocation();
    const isLinkActive = (path) => {
        return location.pathname == path ? 'active' : "";
    }
    return (
        <>

            {/*-main - menu Start-*/}
            <header className="top-area">
                <div className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="logo">
                                    <a href="index.html">
                                        tour<span>Nest</span>
                                    </a>
                                </div>{/*- /.logo-*/}
                            </div>{/*- /.col-*/}
                            <div className="col-sm-10">
                                <div className="main-menu">

                                    {/*- Brand and toggle get grouped for better mobile display -*/}
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                            <i className="fa fa-bars"></i>
                                        </button>{/*- / button-*/}
                                    </div>{/*- /.navbar-header-*/}
                                    <div className="collapse navbar-collapse">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li className="smooth-menu"><Link to={"/"} >Home</Link></li>
                                            <li className="smooth-menu"><Link to={"/Destination"}>Destination</Link></li>
                                            <li className="smooth-menu"><Link to={"/Package"} >Package </Link></li>
                                            <li className="smooth-menu"><Link to={"/Hotel"} >Hotel </Link></li>
                                            <li className="smooth-menu"><Link to={"/Flight"} >Flight </Link></li>
                                            <li className="smooth-menu"><Link to={"/Transport"} >Transport </Link></li>
                                            <li className="smooth-menu"><Link to={"/Offer"} >Offer</Link></li>
                                            <li className="smooth-menu"><Link to={"/Blog"} >Blog</Link></li>
                                            <li className="smooth-menu"><Link to={"/Subscription"} >Subscription</Link></li>

                                            <li>
                                                <button className="book-btn"> <Link to="/login" onClick={handelLogout}>logout</Link>
                                                </button>
                                            </li>{/*-/.project-btn-*/}
                                        </ul>
                                    </div>{/*- /.navbar-collapse -*/}
                                </div>{/*- /.main-menu-*/}
                            </div>{/*- /.col-*/}
                        </div>{/*- /.row -*/}
                        <div className="home-border"></div>{/*- /.home-border-*/}
                    </div>{/*- /.container-*/}
                </div>{/*- /.header-area -*/}

            </header>{/*- /.top-area-*/}
            {/*-main - menu End-*/}

        </>
    );
}

export default Header;

