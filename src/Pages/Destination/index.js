import * as React from 'react';
import AdminLayout from '../../layouts/AdminLayout';

function Destination() {
    return (
        <AdminLayout>

            {/*-galley start-*/}
            <section id="gallery" className="gallery">
                <div className="container">
                    <div className="gallery-details">
                        <div className="gallary-header text-center">
                            <h2>
                                top destination
                            </h2>
                            <p>
                                Duis aute irure dolor in  velit esse cillum dolore eu fugiat nulla.
                            </p>
                        </div>{/*-/.gallery-header-*/}
                        <div className="gallery-box">
                            <div className="gallery-content">
                                <div className="filtr-container">
                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="filtr-item">
                                                <img src="assets/images/gallary/g1.jpg" width="100%" alt="portfolio image" />
                                                <div className="item-title">
                                                    <a href="#">
                                                        china
                                                    </a>
                                                    <p><span>20 tours</span><span>15 places</span></p>
                                                </div>{/*- /.item-title -*/}
                                            </div>{/*- /.filtr-item -*/}
                                        </div>{/*- /.col -*/}

                                        <div className="col-md-6">
                                            <div className="filtr-item">
                                                <img src="assets/images/gallary/g2.jpg" height="100%" alt="portfolio image" />
                                                <div className="item-title">
                                                    <a href="#">
                                                        venuzuala
                                                    </a>
                                                    <p><span>12 tours</span><span>9 places</span></p>
                                                </div> {/*- /.item-title-*/}
                                            </div>{/*- /.filtr-item -*/}
                                        </div>{/*- /.col -*/}

                                        <div className="col-md-4">
                                            <div className="filtr-item">
                                                <img src="assets/images/gallary/g3.jpg" width="100%" alt="portfolio image" />
                                                <div className="item-title">
                                                    <a href="#">
                                                        brazil
                                                    </a>
                                                    <p><span>25 tours</span><span>10 places</span></p>
                                                </div>{/*- /.item-title -*/}
                                            </div>{/*- /.filtr-item -*/}
                                        </div>{/*- /.col -*/}

                                        <div className="col-md-4">
                                            <div className="filtr-item">
                                                <img src="assets/images/gallary/g4.jpg" width="100%" alt="portfolio image" />
                                                <div className="item-title">
                                                    <a href="#">
                                                        australia
                                                    </a>
                                                    <p><span>18 tours</span><span>9 places</span></p>
                                                </div> {/*- /.item-title-*/}
                                            </div>{/*- /.filtr-item -*/}
                                        </div>{/*- /.col -*/}

                                        <div className="col-md-4">
                                            <div className="filtr-item">
                                                <img src="assets/images/gallary/g5.jpg" width="100%" alt="portfolio image" />
                                                <div className="item-title">
                                                    <a href="#">
                                                        netharland
                                                    </a>
                                                    <p><span>14 tours</span><span>12 places</span></p>
                                                </div> {/*- /.item-title-*/}
                                            </div>{/*- /.filtr-item -*/}
                                        </div>{/*- /.col -*/}

                                        <div className="col-md-8">
                                            <div className="filtr-item">
                                                <img src="assets/images/gallary/g6.jpg" width="100%" alt="portfolio image" />
                                                <div className="item-title">
                                                    <a href="#">
                                                        turkey
                                                    </a>
                                                    <p><span>14 tours</span><span>6 places</span></p>
                                                </div> {/*- /.item-title-*/}
                                            </div>{/*- /.filtr-item -*/}
                                        </div>{/*- /.col -*/}

                                    </div>{/*- /.row -*/}

                                </div>{/*- /.filtr-container-*/}
                            </div>{/*- /.gallery-content -*/}
                        </div>{/*-/.galley-box-*/}
                    </div>{/*-/.gallery-details-*/}
                </div>{/*-/.container-*/}

            </section>{/*-/.gallery-*/}
            {/*-gallery end-*/}

        </AdminLayout>
    );
}

export default Destination;
