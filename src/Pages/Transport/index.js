

import React, { useEffect, useState } from 'react';

import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Transport() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_FRONT_URL}/transport/`);
            setData(response.data.data);
        } catch (err) {
            setError("Failed to fetch transports.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <AdminLayout>
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
                            {data.length > 0 ? (
                                data.map((d) => (
                                    <div className="col-md-4 col-sm-6" key={d.id}>
                                        <div className="transport-item">
                                            <div className="transport-title">
                                                <h3>{d.vehicle_id.name}</h3>
                                            </div>
                                            <div className="transport-image">
                                                <a href="transport-detail.html">
                                                    {d?.image?.split(',').map((src, i) => (
                                                        <img
                                                            key={i}
                                                            src={`${process.env.REACT_APP_BACKEND_URL}/transport/${src}`}
                                                            alt="transport"
                                                            width="100%"
                                                            style={{ display: i === 0 ? 'block' : 'none' }}
                                                        />
                                                    ))}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="transport-price">
                                            <h3><span>$</span>{d.roomfare || 100}</h3>
                                            <Link className="btn" to={`/Transport/booking/${d.id}`}><i className="fa fa-shopping-cart"></i> Book Now</Link>
                                        </div>
                                    </div>

                                ))
                            ) : (
                                <div>No transports available</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </AdminLayout >
    );
}

export default Transport;
