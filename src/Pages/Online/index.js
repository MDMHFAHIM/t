import * as React from 'react';
import { useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';

function Online() {
    return (
        <AdminLayout>


            {/*-subscribe start-*/}
            <section id="subs" className="subscribe">
                <div className="container">
                    <div className="subscribe-title text-center">
                        <h1>
                            Proceed To Payment
                        </h1>
                        <br/>
                        <p>
                            You Can Pay Online Through Our Official Account No - 987654321
                        </p>
                    </div>

                    <div className="subscribe-title text-center">
                        <h4>
                            To Check Payment ---
                        </h4>

                        <br/>

                    </div>


                    <form>
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                                <div className="custom-input-group">
                                    <input type="email" className="form-control" placeholder="Enter your Transaction Number Here" />

                                    <button className="appsLand-btn subscribe-btn">Check</button>
                                    <div className="clearfix"></div>
                                    <i className="fa fa-envelope"></i>
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

export default Online;
