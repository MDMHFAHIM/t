import React, { useEffect, useState } from 'react';

import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Hotel() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_FRONT_URL}/hotel/`);
            setData(response.data.data);
        } catch (err) {
            setError("Failed to fetch hotels.");
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
                            Book Top Class Hotel
                        </h2>
                        <p>
                            Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.
                        </p>
                    </div>{/*-/.gallery-header-*/}
                    <div className="packages-content">
                        <div className="row">
                            {data.length > 0 ? (
                                data.map((d) => (
                                    <div className="col-md-4 col-sm-6 hotelblock" key={d.id}>
                                        <div className="hotel-item">
                                            <div className="hotel-title">
                                                <h3>{d.hotel_name}</h3>
                                            </div>
                                            <div className="hotel-image">
                                                <a href="hotel-detail.html">
                                                    {d?.image?.split(',').map((src, i) => (
                                                        <img
                                                            key={i}
                                                            src={`${process.env.REACT_APP_BACKEND_URL}/hotel/${src}`}
                                                            alt="hotel"
                                                            width="100%"
                                                        />
                                                    ))}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="hotel-price">
                                            <h3><span>$</span>{d.roomtype.roomfare || 100}</h3>
                                            <Link className="btn" to={`/Hotel/booking/${d.id}`}><i className="fa fa-shopping-cart"></i> Book Now</Link>
                                        </div>
                                    </div>

                                ))
                            ) : (
                                <div>No hotels available</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </AdminLayout >
    );
}

export default Hotel;
