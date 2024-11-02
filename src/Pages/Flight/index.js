import * as React from 'react';
import { useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';

function Packages() {
    return (
        <AdminLayout >

            {/*-packages start-*/}
            <section id="pack" className="packages">
                <div className="container">
                    <div className="gallary-header text-center">
                        <h2>
                           Flight Informations
                        </h2>
                        <p>
                        “Vacation calories don’t count. Right?”
                        </p>
                    </div>{/*-/.gallery-header-*/}
                    <div className="packages-content">
                        <div className="row">

                            <div className="col-md-4 col-sm-6">
                                <div className="single-package-item">
                                    <img src="https://images.pexels.com/photos/2033343/pexels-photo-2033343.jpeg?cs=srgb&dl=pexels-jason-toevs-1047869-2033343.jpg&fm=jpg" alt="package-place" />
                                    <div className="single-package-item-txt">
                                        <h3>italy <span className="pull-right">$499</span></h3>
                                        <div className="packages-para">
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i> 5 daays 6 nights
                                                </span>
                                                <i className="fa fa-angle-right"></i>  5 star accomodation
                                            </p>
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i>  transportation
                                                </span>
                                                <i className="fa fa-angle-right"></i>  food facilities
                                            </p>
                                        </div>{/*-/.packages-para-*/}
                                        <div className="packages-review">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span>2544 review</span>
                                            </p>
                                        </div>{/*-/.packages-review-*/}
                                        <div className="about-btn">
                                            <button className="about-view packages-btn">
                                                book now
                                            </button>
                                        </div>{/*-/.about-btn-*/}
                                    </div>{/*-/.single-package-item-txt-*/}
                                </div>{/*-/.single-package-item-*/}

                            </div>{/*-/.col-*/}

                            <div className="col-md-4 col-sm-6">
                                <div className="single-package-item">
                                    <img src="https://i.ytimg.com/vi/bFXJIdqckXY/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEEgUihlMA8=&rs=AOn4CLA7VINq5hQiM0Lbw2hgVprcSn2CYg" alt="package-place" />
                                    <div className="single-package-item-txt">
                                        <h3>england <span className="pull-right">$1499</span></h3>
                                        <div className="packages-para">
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i> 5 daays 6 nights
                                                </span>
                                                <i className="fa fa-angle-right"></i>  5 star accomodation
                                            </p>
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i>  transportation
                                                </span>
                                                <i className="fa fa-angle-right"></i>  food facilities
                                            </p>
                                        </div>{/*-/.packages-para-*/}
                                        <div className="packages-review">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span>2544 review</span>
                                            </p>
                                        </div>{/*-/.packages-review-*/}
                                        <div className="about-btn">
                                            <button className="about-view packages-btn">
                                                book now
                                            </button>
                                        </div>{/*-/.about-btn-*/}
                                    </div>{/*-/.single-package-item-txt-*/}
                                </div>{/*-/.single-package-item-*/}

                            </div>{/*-/.col-*/}

                            <div className="col-md-4 col-sm-6">
                                <div className="single-package-item">
                                    <img src="https://www.tennessean.com/gcdn/presto/2019/06/23/USAT/c3a9f051-bd6c-4b39-b5b9-38244deec783-GettyImages-932651818.jpg" alt="package-place" />
                                    <div className="single-package-item-txt">
                                        <h3>france <span className="pull-right">$1199</span></h3>
                                        <div className="packages-para">
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i> 5 daays 6 nights
                                                </span>
                                                <i className="fa fa-angle-right"></i>  5 star accomodation
                                            </p>
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i>  transportation
                                                </span>
                                                <i className="fa fa-angle-right"></i>  food facilities
                                            </p>
                                        </div>{/*-/.packages-para-*/}
                                        <div className="packages-review">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span>2544 review</span>
                                            </p>
                                        </div>{/*-/.packages-review-*/}
                                        <div className="about-btn">
                                            <button className="about-view packages-btn">
                                                book now
                                            </button>
                                        </div>{/*-/.about-btn-*/}
                                    </div>{/*-/.single-package-item-txt-*/}
                                </div>{/*-/.single-package-item-*/}

                            </div>{/*-/.col-*/}

                            <div className="col-md-4 col-sm-6">
                                <div className="single-package-item">
                                    <img src="https://thumbs.dreamstime.com/b/young-female-tourist-holding-many-suitcases-front-plane-young-female-tourist-holding-many-suitcases-front-plane-328984721.jpg" alt="package-place" />
                                    <div className="single-package-item-txt">
                                        <h3>india <span className="pull-right">$799</span></h3>
                                        <div className="packages-para">
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i> 5 daays 6 nights
                                                </span>
                                                <i className="fa fa-angle-right"></i>  5 star accomodation
                                            </p>
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i>  transportation
                                                </span>
                                                <i className="fa fa-angle-right"></i>  food facilities
                                            </p>
                                        </div>{/*-/.packages-para-*/}
                                        <div className="packages-review">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span>2544 review</span>
                                            </p>
                                        </div>{/*-/.packages-review-*/}
                                        <div className="about-btn">
                                            <button className="about-view packages-btn">
                                                book now
                                            </button>
                                        </div>{/*-/.about-btn-*/}
                                    </div>{/*-/.single-package-item-txt-*/}
                                </div>{/*-/.single-package-item-*/}

                            </div>{/*-/.col-*/}

                            <div className="col-md-4 col-sm-6">
                                <div className="single-package-item">
                                    <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/297084137/ZR/MH/GQ/9160165/international-tour-package-500x500.jpg" alt="package-place" />
                                    <div className="single-package-item-txt">
                                        <h3>spain <span className="pull-right">$999</span></h3>
                                        <div className="packages-para">
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i> 5 daays 6 nights
                                                </span>
                                                <i className="fa fa-angle-right"></i>  5 star accomodation
                                            </p>
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i>  transportation
                                                </span>
                                                <i className="fa fa-angle-right"></i>  food facilities
                                            </p>
                                        </div>{/*-/.packages-para-*/}
                                        <div className="packages-review">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span>2544 review</span>
                                            </p>
                                        </div>{/*-/.packages-review-*/}
                                        <div className="about-btn">
                                            <button className="about-view packages-btn">
                                                book now
                                            </button>
                                        </div>{/*-/.about-btn-*/}
                                    </div>{/*-/.single-package-item-txt-*/}
                                </div>{/*-/.single-package-item-*/}

                            </div>{/*-/.col-*/}

                            <div className="col-md-4 col-sm-6">
                                <div className="single-package-item">
                                    <img src="https://i0.wp.com/www.airwhizz.com/wp-content/uploads/2018/09/Medical-Tourism.jpeg?resize=820%2C470" alt="package-place" />
                                    <div className="single-package-item-txt">
                                        <h3>thailand <span className="pull-right">$799</span></h3>
                                        <div className="packages-para">
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i> 5 daays 6 nights
                                                </span>
                                                <i className="fa fa-angle-right"></i>  5 star accomodation
                                            </p>
                                            <p>
                                                <span>
                                                    <i className="fa fa-angle-right"></i>  transportation
                                                </span>
                                                <i className="fa fa-angle-right"></i>  food facilities
                                            </p>
                                        </div>{/*-/.packages-para-*/}
                                        <div className="packages-review">
                                            <p>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <span>2544 review</span>
                                            </p>
                                        </div>{/*-/.packages-review-*/}
                                        <div className="about-btn">
                                            <button className="about-view packages-btn">
                                                book now
                                            </button>
                                        </div>{/*-/.about-btn-*/}
                                    </div>{/*-/.single-package-item-txt-*/}
                                </div>{/*-/.single-package-item-*/}

                            </div>{/*-/.col-*/}

                        </div>{/*-/.row-*/}
                    </div>{/*-/.packages-content-*/}
                </div>{/*-/.container-*/}

            </section>{/*-/.packages-*/}
            {/*-packages end-*/}

        </AdminLayout>
    );
}

export default Packages;
