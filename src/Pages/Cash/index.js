import * as React from 'react';
import { useState } from "react";
import AdminLayout from '../../layouts/AdminLayout';

function Cash() {
    return (
        <AdminLayout>


            {/*-subscribe start-*/}
            <section id="subs" className="subscribe">
                <div className="container">
                    <div className="subscribe-title text-center">
                        <h1>
                            Proceed To Payment
                        </h1>
                        <br />
                        <br />

                        <p>
                            <h4> Please Kindly Contact To Our Local Office Near You </h4>
                        </p>

                        <br />
                        <br />

                        <p>
                            <h2> You Must Collect The Invoice After Payment  </h2>
                        </p>
                    </div>

                </div>

            </section>
            {/*-subscribe end-*/}


        </AdminLayout>
    );
}

export default Cash;
