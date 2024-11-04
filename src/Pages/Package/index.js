
import React, { useEffect, useState } from 'react';

import axios from '../../components/axios';
import AdminLayout from '../../layouts/AdminLayout';
import { Link } from 'react-router-dom';

function Package() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getDatas();
    }, []);

    const getDatas = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/package/`);
            setData(response.data.data);
        } catch (err) {
            setError("Failed to fetch packages.");
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
                            Package Informations
                        </h2>
                        <p>
                            “Vacation calories don’t count. Right?”
                        </p>
                    </div>{/*-/.gallery-header-*/}
                    <div className="packages-content">
                        <div className="row">
                            {data.length > 0 ? (
                                data.map((d) => (
                                    <div className="col-md-4 col-sm-6" key={d.id}>
                                        <div className="package-item">
                                            <div className="package-title">
                                                <h3>{d.package_name}</h3>
                                            </div>
                                            <div className="package-image">
                                                <a href="package-detail.html">
                                                    {d?.image?.split(',').map((src, i) => (
                                                        <img
                                                            key={i}
                                                            src={`${process.env.REACT_APP_BACKEND_URL}/package/${src}`}
                                                            alt="package"
                                                            width="100%"
                                                            style={{ display: i === 0 ? 'block' : 'none' }}
                                                        />
                                                    ))}
                                                </a>
                                            </div>
                                        </div>
                                        <div className="package-price">
                                            <h3><span>$</span>{d.roomfare || 100}</h3>
                                            <Link className="btn" to={`/Package/booking/${d.id}`}><i className="fa fa-shopping-cart"></i> Book Now</Link>
                                        </div>
                                    </div>

                                ))
                            ) : (
                                <div>No packages available</div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </AdminLayout >
    );
}

export default Package;
