import React from 'react';
import {  NavLink } from 'react-router-dom';



const Services = () => {
    return (
        <>
            <div className='services-pages'>
                <section className='section section-lg banner-services'>
                    <div className='services-banner d-flex justify-content-center pt-5'>
                        <img src='https://www.csb.co.in/sites/default/files/recruitement-of-the-officer.jpg' alt='bannner' placeholder='Services' />
                    </div>
                </section>

                <div className='shadow mb-5'>
                    <section className="section section-lg p-5 bg-white">
                        <div className="container text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-xl-10 p-3">
                                    <h2>A Wide Range of Banking &amp; Financial Services</h2>
                                    <div className="heading-6 block-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente sit,
                                        assumenda doloribus culpa laudantium reprehenderit esse accusamus quae rerum expedita blanditiis placeat
                                        lorem  Lorem ipsum dolor sit amet, qui tollit laoreet ocurreret id, ne vis melius offendit appetere,
                                        ius timeam percipit argumentum id. His mutat nostrum ad, ei qui nostro aeterno recteque, aperiam quaerendum id has et.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <section className="section section-lg bg-gray-100 p-5">
                    <div className="container">
                        <div className="service-list">
                            <div className="row row-20 service-item">
                                <div className="col-md-6 shadow mb-5 p-3">
                                    <img src="https://livedemo00.template-help.com/wt_prod-8755/images/services-1-540x327.jpg" alt="" width="540" height="327" />
                                </div>
                                <div className="col-md-6 p-5">
                                    <h3 className="title">Personal Banking</h3>
                                    <p className="exeption">Lorem ipsum dolor sit amet, qui tollit laoreet ocurreret id, ne vis melius offendit appetere, ius
                                        timeam percipit argumentum id. His mutat nostrum ad, ei qui nostro aeterno recteque, aperiam quaerendum id has. Quod tantas
                                        volumus eu eum, mei.</p>
                                    <button className="btn btn-primary m-3" type="button"><NavLink className="nav-link text-white" to="/contactForm">Learn More</NavLink></button>
                                </div>
                            </div>
                            <div className="row row-20 service-item">
                                <div className="col-md-6 shadow mb-5 p-3">
                                    <img src="https://livedemo00.template-help.com/wt_prod-8755/images/services-2-540x327.jpg" alt="" width="540" height="327" />
                                </div>
                                <div className="col-md-6 p-5">
                                    <h3 className="title">Private Banking</h3>
                                    <p className="exeption">Lorem ipsum dolor sit amet, qui tollit laoreet ocurreret id, ne vis melius offendit appetere, ius
                                        timeam percipit argumentum id. His mutat nostrum ad, ei qui nostro aeterno recteque, aperiam quaerendum id has. Quod tantas
                                        volumus eu eum, mei.</p>
                                    <button className="btn btn-primary m-3" type="button"><NavLink className="nav-link text-white" to="/contactForm">Learn More</NavLink></button>
                                </div>
                            </div>
                            <div className="row row-20 service-item">
                                <div className="col-md-6 shadow mb-5 p-3">
                                    <img src="https://livedemo00.template-help.com/wt_prod-8755/images/services-3-540x327.jpg" alt="" width="540" height="327" />
                                </div>
                                <div className="col-md-6 p-5">
                                    <h3 className="title">Business Banking</h3>
                                    <p className="exeption">Lorem ipsum dolor sit amet, qui tollit laoreet ocurreret id, ne vis melius offendit appetere, ius
                                        timeam percipit argumentum id. His mutat nostrum ad, ei qui nostro aeterno recteque, aperiam quaerendum id has. Quod tantas
                                        volumus eu eum, mei</p>
                                    <button className="btn btn-primary m-3" type="button"><NavLink className="nav-link text-white" to="/contactForm">Learn More</NavLink></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default Services;