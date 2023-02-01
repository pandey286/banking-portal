import React from "react";
import { Link, NavLink } from "react-router-dom";
import Card from "./images/Creditcard.jpg";
import Loanspic from "./images/Loans.jpg";
import Cyber from "./images/Cyber.jpg";
import Car from ".././Shared/Carousel"



const Home = () => {
    return (
        <>
            <Car />

            {/* Services-Card */}
            <section className="shadow p-3 service-section">
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 p-1">
                                <div className="card h-100 ">
                                    <div className="p-4">
                                        <img className="img-fluid flex-shrink-0" src={Card} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title"> Cards Services
                                        </h4>
                                        <p className="">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam dolorum voluptates neque non qui voluptatum, veritatis soluta a voluptatem eveniet ut cumque repellat sapiente!
                                        </p>
                                    </div>
                                    <div className="card-read-more">
                                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" className="btn btn-link btn-block">
                                            Read More<i className="fas fa-angle-double-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 p-1">
                                <div className="card h-100 ">
                                    <div className="">
                                        <img className="img-fluid flex-shrink-0" src={Loanspic} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">
                                            Loans
                                        </h4>
                                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro totam et praesentium, cupiditate repellat, pariatur dicta at voluptatem assumenda mollitia ratione commodi? Delectus, voluptatibus.</p>

                                    </div>
                                    <div className="card-read-more">
                                        <Link to="/loans" className="btn btn-link btn-block">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 p-1">
                                <div className="card h-100 ">
                                    <div className="">
                                        <img className="img-fluid flex-shrink-0" src={Cyber} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title">
                                            Cyber Security
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

            {/* About-Us Start */}
            <div className='shadow mb-1 pb-1'>
                <section className="section section-lg p-5 bg-white">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-xl-10 p-3">
                                <h2>About Us</h2>
                                <div className="heading-6 block-lg">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente sit,
                                    assumenda doloribus culpa laudantium reprehenderit esse accusamus quae rerum expedita blanditiis placeat
                                    lorem  Lorem ipsum dolor sit amet, qui tollit laoreet ocurreret id, ne vis melius offendit appetere,
                                    ius timeam percipit argumentum id. His mutat nostrum ad, ei qui nostro aeterno recteque, aperiam quaerendum id has et.
                                </div>
                                <button className="btn btn-primary m-3" type="button"><NavLink className="nav-link text-white" to="/aboutUs">Learn More</NavLink></button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* About-us End */}




        </>
    )
}

export default Home;