import React from "react";
import {Link, NavLink } from "react-router-dom";
import Card from "./images/Creditcard.jpg";
import Loanspic from "./images/Loans.jpg";
import Cyber from "./images/Cyber.jpg";



const Home = () => {
    return (
        <>
            <div>
                {/* carousel-section-start*/}
                <section className="carousel-section">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://www.csb.co.in/sites/default/files/CSB-FD-Website-Banner-750px-383px-CSB_02_02_11_22.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.csb.co.in/sites/default/files/CSB_One_Card_Web_Banner_7500x383.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://www.csb.co.in/sites/default/files/CSB-NRE-&-FCNR-Banner-750-px-X-383-px-CSB_06_05_11_22.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </div>
            {/* carousel-section-end */}

            {/* About-Us Start */}
            <div className='shadow mb-5'>
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

            { /*News*/}

            <div className="onoffswitch3 mb-3">
                <input type="checkbox" name="onoffswitch3" className="onoffswitch3-checkbox" id="myonoffswitch3" checked />
                <label className="onoffswitch3-label" for="myonoffswitch3">
                    <span className="onoffswitch3-inner">
                        <span className="onoffswitch3-active">
                            <marquee className="scroll-text"> Policy on Resolution Framework 2.0 Resolution of Covid-19 related stress of Micro Small and Medium Enterprises (MSMEs) <span className="glyphicon glyphicon-forward"></span> Policy on Resolution Framework 2.0 - Resolution of Covid-19 related stress of Individuals and Small Businesses <span className="glyphicon glyphicon-forward"></span>  Guaranteed Emergency Credit Line Scheme - Extension of the scheme upto 30th June 2021, Other Modifications <span className="glyphicon glyphicon-forward"></span> Guaranteed Emergency Credit Line Scheme - Modification to Eligibility Criteria under ECLGS 2.0 </marquee>
                            <span className="onoffswitch3-switch">BREAKING NEWS {'>>'} </span>
                        </span>
                        <span className="onoffswitch3-inactive"><span className="onoffswitch3-switch">SHOW BREAKING NEWS</span></span>
                    </span>
                </label>
            </div>

            {/* Services-Card */}
            <section className="shadow pb-1 pt-4 service-section">
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-xs-12 col-sm-4">
                                <div class="card">
                                    <div className="p-4">
                                        <img className="img-fluid flex-shrink-0" src={Card} alt="" />
                                    </div>
                                    <div class="card-content">
                                        <h4 class="card-title"> Cards Services
                                        </h4>
                                        <p class="">
                                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quam dolorum voluptates neque non qui voluptatum, veritatis soluta a voluptatem eveniet ut cumque repellat sapiente!
                                        </p>
                                    </div>
                                    <div class="card-read-more">
                                        <a href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html" class="btn btn-link btn-block">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                <div class="card">
                                    <div className="">
                                        <img className="img-fluid flex-shrink-0" src={Loanspic} alt="" />
                                    </div>
                                    <div class="card-content">
                                        <h4 class="card-title">
                                            Loans
                                        </h4>
                                        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro totam et praesentium, cupiditate repellat, pariatur dicta at voluptatem assumenda mollitia ratione commodi? Delectus, voluptatibus.</p>
                                         
                                    </div>
                                    <div class="card-read-more">
                                        <Link to="/loans" class="btn btn-link btn-block">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-4">
                                <div class="card">
                                    <div className="">
                                        <img className="img-fluid flex-shrink-0" src={Cyber} alt="" />
                                    </div>
                                    <div class="card-content">
                                        <h4 class="card-title">
                                         Cyber Security
                                        </h4>
                                        <p class="">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum inventore libero impedit est facere molestiae iure corrupti animi, quis nostrum repudiandae rerum, expedita itaque tenetur!
                                        </p>
                                    </div>
                                    <div class="card-read-more">
                                        <a href="https://rbidocs.rbi.org.in/rdocs/PressRelease/PDFs/PR163037E920A47573411FBC7D79B058FED34A.PDF" class="btn btn-link btn-block">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>




        </>
    )
}

export default Home;