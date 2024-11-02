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
                            Transportation Informations
                        </h2>
                        <p>
                            You cannot understand a city without using its public transportation system.
                        </p>
                    </div>{/*-/.gallery-header-*/}
                    <div className="packages-content">
                        <div className="row">

                            <div className="col-md-4 col-sm-6">
                                <div className="single-package-item">
                                    <img src="https://images.squarespace-cdn.com/content/v1/620e4b039826c21ef12711ad/1649850234755-71ECU0TINK77JG0HDK5W/unsplash-image-nf7W_hn6DKQ.jpg" alt="package-place" />
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
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTag-37-DPCPwVQCMcHnbwEowvq-ld2bMrzYw&s" alt="package-place" />
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
                                    <img src="https://cdn.busonlineticket.com/images/2023/02/Transtar-SuperCoach-SVIP.png" alt="package-place" />
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
                                    <img src="https://www.kitebangladesh.com/images/caravan/1.jpg" alt="package-place" />
                                    <div className="single-package-item-txt">
                                        <h3>Bangladesh <span className="pull-right">$799</span></h3>
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
                                    <img src="https://thetourism.institute/wp-content/uploads/2024/03/A_colorful_tour_bus_with-5-400x250.png" alt="package-place" />
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
                                    <img src="https://www.avilaturismo.com/wp-content/uploads/IMG-20150909-WA0002.jpg" alt="package-place" />
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


// import React, { useEffect, useState } from 'react';
// import axios from '../../../components/axios';
// import AdminLayout from '../../../layouts/AdminLayout';
// import { Link } from 'react-router-dom';

// function HotelBooking() {


//     return (
//         <AdminLayout>
//             {/*-packages start-*/}
//             <section id="pack" className="packages">
//                 <div className="container">
//                     <div className="gallary-header text-center">
//                         <h2>
//                             special packages
//                         </h2>
//                         <p>
//                             Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.
//                         </p>
//                     </div>{/*-/.gallery-header-*/}
//                     <div className="packages-content">
//                         <div className="row">

//                         </div>
//                     </div>
//                 </div>
//             </section>

//         </AdminLayout >
//     );
// }

// export default HotelBooking;