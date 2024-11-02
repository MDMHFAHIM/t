import * as React from 'react';
import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {

    return (
        <>

            {/*- footer-copyright start -*/}
            <footer className="footer-copyright">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">

                            <div className="col-sm-3">
                                <div className="single-footer-item">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            tour<span>Nest</span>
                                        </a>
                                        <p>
                                            best travel agency
                                        </p>
                                    </div>
                                </div>{/*-/.single-footer-item-*/}
                            </div>{/*-/.col-*/}

                            <div className="col-sm-3">
                                <div className="single-footer-item">
                                    <h2>link</h2>
                                    <div className="single-footer-txt">
                                        <p><a href="#">home</a></p>
                                        <p><a href="#">destination</a></p>
                                        <p><a href="#">spacial packages</a></p>
                                        <p><a href="#">special offers</a></p>
                                        <p><a href="#">blog</a></p>
                                        <p><a href="#">contacts</a></p>
                                    </div>{/*-/.single-footer-txt-*/}
                                </div>{/*-/.single-footer-item-*/}

                            </div>{/*-/.col-*/}

                            <div className="col-sm-3">
                                <div className="single-footer-item">
                                    <h2>popular destination</h2>
                                    <div className="single-footer-txt">
                                        <p><a href="#">china</a></p>
                                        <p><a href="#">venezuela</a></p>
                                        <p><a href="#">brazil</a></p>
                                        <p><a href="#">australia</a></p>
                                        <p><a href="#">london</a></p>
                                    </div>{/*-/.single-footer-txt-*/}
                                </div>{/*-/.single-footer-item-*/}
                            </div>{/*-/.col-*/}

                            <div className="col-sm-3">
                                <div className="single-footer-item text-center">
                                    <h2 className="text-left">contacts</h2>
                                    <div className="single-footer-txt text-left">
                                        <p>+1 (300) 1234 6543</p>
                                        <p className="foot-email"><a href="#">info@tnest.com</a></p>
                                        <p>North Warnner Park 336/A</p>
                                        <p>Newyork, USA</p>
                                    </div>{/*-/.single-footer-txt-*/}
                                </div>{/*-/.single-footer-item-*/}
                            </div>{/*-/.col-*/}

                        </div>{/*-/.row-*/}

                    </div>{/*-/.footer-content-*/}
                    <hr />
                    <div className="foot-icons ">
                        <ul className="footer-social-links list-inline list-unstyled">
                            <li><a href="#" target="_blank" className="foot-icon-bg-1"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#" target="_blank" className="foot-icon-bg-2"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank" className="foot-icon-bg-3"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                        <p>&copy; 2024 <a href="https://www.themesine.com">M H FAHIM</a>. All Right Reserved</p>

                    </div>{/*-/.foot-icons-*/}
                    <div id="scroll-Top">
                        <i className="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>{/*-/.scroll-Top-*/}
                </div>{/*- /.container-*/}

            </footer > {/*- /.footer-copyright-*/}
            {/*-footer - copyright end-*/}

        </>
    );
}

export default Footer;

