

import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function Mail() {

    return (
        <AdminLayout>
            <section id="pack" className="packages">
                <div className="container">
                    <div className="gallary-header text-center">
                        <h2>
                            Proceed To Booking.......
                        </h2>
                        <p>
                            <h4> Check Your Mail And Kindly Follow Given Instruction For Order & Payment. </h4>
                        </p>
                    </div>{/*-/.gallery-header-*/}
                    <div className="packages-content">
                        <div className="row">


                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    )
}

export default Mail
