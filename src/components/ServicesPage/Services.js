import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Car from ".././Shared/Carousel"
import Service1 from "./images/services1.jpg"
import Service2 from "./images/services2.jpg"
import Service3 from "./images/services3.jpg"


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

                <section className="service-section p-3">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 ">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={Service2} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title"> Open Account
                                            </h4>
                                            <p className="">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam dolorum voluptates neque non qui voluptatum, veritatis soluta a voluptatem eveniet ut cumque repellat sapiente!
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
                                    <div className="card h-100 ">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src="https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/11/26/Photos/Processed/homeloaniStock-kCrG--621x414@LiveMint.jpg" alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title mt-1">
                                                Personal Loan
                                            </h4>
                                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro totam et praesentium, cupiditate repellat, pariatur dicta at voluptatem assumenda mollitia ratione commodi? Delectus, voluptatibus.</p>

                                        </div>
                                        <div className="card-read-more">
                                            <Link to="/personal-loan" className="btn btn-link btn-block">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 ">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={Service3} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                Education Loan
                                            </h4>
                                            <p className="">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore libero impedit est facere molestiae iure corrupti animi, quis nostrum repudiandae rerum, expedita itaque tenetur!
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
                        </div>
                    </div>
                </section>

                <section className="p-3 service-section">
                    <div className="content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 ">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={Service1} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title"> Gold Loan
                                            </h4>
                                            <p className="">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam dolorum voluptates neque non qui voluptatum, veritatis soluta a voluptatem eveniet ut cumque repellat sapiente!
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
                                    <div className="card h-100 ">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={Service1} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                Home Loan
                                            </h4>
                                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro totam et praesentium, cupiditate repellat, pariatur dicta at voluptatem assumenda mollitia ratione commodi? Delectus, voluptatibus.</p>

                                        </div>
                                        <div className="card-read-more">
                                            <Link to="/home-loan" className="btn btn-link btn-block">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4 p-1">
                                    <div className="card h-100 ">
                                        <div className="h-50">
                                            <img className="img-fluid flex-shrink-0" src={Service1} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                Commercial Mortgage
                                            </h4>
                                            <p className="">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore libero impedit est facere molestiae iure corrupti animi, quis nostrum repudiandae rerum, expedita itaque tenetur!
                                            </p>
                                        </div>
                                        <div className="card-read-more">
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