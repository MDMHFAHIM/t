import * as React from 'react';
import { useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';

function Subscription() {
    return (
        <AdminLayout>


            {/*-subscribe start-*/}
            <section id="subs" className="subscribe">
                <div className="container">
                    <div className="subscribe-title text-center">
                        <h2>
                            Join our Subscribers List to Get Regular Update
                        </h2>
                        <p>
                            Subscribe Now. We will send you Best offer for your Trip
                        </p>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                                <div className="custom-input-group">
                                    <input type="email" className="form-control" placeholder="Enter your Email Here" />

                                    <button className="appsLand-btn subscribe-btn">Subscribe</button>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-envelope"></i>
                                </div>

                                <br />

                                <div className="custom-input-group">

                                    <input type="text" className="form-control" placeholder=" Drop Your Contact Number" />

                                    <button className="appsLand-btn subscribe-btn">Subscribe</button>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-envelope"></i>
                                </div>

                                <br />
                                <br />

                                <div className="subscribe-title text-center">
                                    <h3>
                                        Charge ~ 50$/Month | 500$/Annual
                                    </h3>

                                </div>

                            </div>
                        </div>
                    </form>
                </div>

            </section>
            {/*-subscribe end-*/}


        </AdminLayout>
    );
}

export default Subscription;
