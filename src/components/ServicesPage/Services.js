import React from 'react';
import { Link} from 'react-router-dom';
import Car from ".././Shared/Carousel"
import Service1 from "./images/services1.jpg"
import Service3 from "./images/services3.jpg"
import CM from "./images/cm.jpeg"
import GL from "./images/gl.jpeg"
import HL from "./images/homel.jpg"
import PB from "./images/pb.jpeg"

const Services = () => {
    return (
        <>

            <div className='services-pages'>
                <Car />
                <div className='shadow mb-5'>
                    <section className="section section-lg p-5 bg-white">
                        <div className="container text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-12 col-xl-10 p-3">
                                    <h2 className="mb-3">A Wide Range of Banking &amp; Financial Services</h2>
                                    <div className="heading-6 block-lg fs-6 m-2">
                                    E-banking services have changed the way we make online transactions. With the ability to easily transfer funds and pay bills online, e-banking services have made it easier to make online purchases and conduct business. 

                                    Additionally, many e-banking services now offer mobile banking, allowing customers to make transactions and check account balances via their smartphones.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section className="service-section p-3">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 m-3 ">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={PB} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title mt-3"> Open Account
                                            </h4>
                                            <p className="">
                                                To start banking with us, here is the first step to open an account 
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <a href="/register" className="btn btn-link btn-block">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 m-3">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={Service1} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title mt-3">
                                                Personal Loan
                                            </h4>
                                            <p className=""> 
                                             Explore more about the personal loans we offer and find your best deal of loan
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <Link to="/personal-loan" className="btn btn-link btn-block">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 m-3">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={Service3} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title mt-3">
                                                Education Loan
                                            </h4>
                                            <p className="">
                                            Explore more about the educational loans we offer and find your best deal of loan

                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                        <Link to="/education-loan" className="btn btn-link btn-block">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 m-3">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={GL} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title mt-3"> Gold Loan
                                            </h4>
                                            <p className="">
                                            Explore more about the gold loans we offer and find your best deal of loan
                                            </p>
                                        </div>
                                        <div className="card-read-more">
                                            <a href="/gold-loan" className="btn btn-link btn-block">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 m-3 ">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={HL} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title mt-3">
                                                Home Loan
                                            </h4>
                                            <p className=""> 
                                            
                                            Explore more about the home loan we offer and find your best deal of loan

                                             </p>

                                        </div>
                                        <div className="card-read-more">
                                            <Link to="/home-loan" className="btn btn-link btn-block">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 m-3">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={CM} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title mt-3">
                                                Commercial Mortgage
                                            </h4>
                                            <p className="">
                                                Explore more about the commercial mortgage
                                            </p>
                                        </div>
                                        <div className="card-read-more mt-3">
                                            <a href="https://rbidocs.rbi.org.in/rdocs/PressRelease/PDFs/PR163037E920A47573411FBC7D79B058FED34A.PDF" className="btn btn-link btn-block" target="_blank">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
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