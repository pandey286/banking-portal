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
                                    <div className="h-50">
                                        <img className="img-fluid flex-shrink-0" src={Card} alt="" />
                                    </div>
                                    <div className="card-content">
                                        <h4 className="card-title mt-2"> Cards Services
                                        </h4>
                                        <p className="">
                                        
                                        Explore our range of cards designed for your unique needs.

                                        </p>
                                        <button className="btn btn-outline-info shadow me-3 col-12 mt-1" type="button"><Link className="nav-link text-dark " to="/contactUs">Learn More</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 p-1">
                                <div className="card h-100 ">
                                    <div className="h-50">
                                        <img className="img-fluid flex-shrink-0" src={Loanspic} alt="" />
                                    </div>
                                    <div className="card-content h-50">
                                        <h4 className="card-title mt-3">
                                            Loans
                                        </h4>
                                        <p className="">Explore our range of loans designed for your unique needs.</p>
                                        <button className="btn btn-outline-info shadow me-3 col-12" type="button"><Link className="nav-link text-dark " to="/services">Learn More</Link></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 p-1">
                                <div className="card h-100 ">
                                    <div className="h-50">
                                        <img className="img-fluid flex-shrink-0" src={Cyber} alt="" />
                                    </div>
                                    <div className="card-content h-50">
                                        <h4 className="card-title mt-3">
                                            Cyber Security
                                        </h4>
                                        <p className="mt-2">
                                            Enjoy risk and hassle free banking with us
                                        </p>
                                        <button className="btn btn-outline-info shadow me-3 col-12 mt-3" type="button"><Link className="nav-link text-dark " to="https://rbidocs.rbi.org.in/rdocs/PressRelease/PDFs/PR163037E920A47573411FBC7D79B058FED34A.PDF">Learn More</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About-Us Start */}
            <div className=' pb-1'>
                <section className="section section-lg p-5 bg-white">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-xl-10 p-3">
                                <div className="heading-6 block-lg">
                                    <h1> We’re just the bank you need. </h1>
                                    
                                    <p className= " m-4 "> 

                                    <p>PSL Bank is the third largest private sector bank in India. The Bank offers the entire spectrum of financial services to customer segments covering Large and Mid-Corporates, MSME, Agriculture and Retail Businesses. </p>

                                    <p>The Bank has a large footprint of 4,758 domestic branches (including extension counters) with 10,990 ATMs & 5,972 cash recyclers spread across the country as of 31st March 2022. The Bank has 6 Axis Virtual Centers with over 1,500 Virtual Relationship Managers as of 31st March 2022. The Overseas operations of the Bank are spread over eight international offices with branches in Singapore, Dubai (at DIFC), and Gift City-IBU; representative offices in Dhaka, Dubai, Abu Dhabi, Sharjah and an overseas subsidiary in London, UK. The international offices focus on Corporate Lending, Trade Finance, Syndication, Investment Banking, Liability Businesses, and Private Banking/Wealth Management offerings. </p>

                                    <p>PSL Bank is one of the first new generation private sector banks to have begun operations in 1994. The Bank was promoted in 1993, jointly by Specified Undertaking of Unit Trust of India (SUUTI) (then known as Unit Trust of India), Life Insurance Corporation of India (LIC), General Insurance Corporation of India (GIC), National Insurance Company Ltd., The New India Assurance Company Ltd., The Oriental Insurance Company Ltd., and United India Insurance Company Ltd. The shareholding of Unit Trust of India was subsequently transferred to SUUTI, an entity established in 2003. </p>

                                    <p>With a balance sheet size of Rs. 11,75,178 crores as on 31st March 2022, PSL Bank has achieved consistent growth and with a 5-year CAGR (2016-17 to 2021-22) of 14% each in Total Assets & Advances and 15% in Deposits. </p>
                                    
                                    </p>

                                </div>
                                <button className="btn btn-primary m-3 col-6" type="button"><NavLink className="nav-link text-white" to="/aboutUs">Know More</NavLink></button>
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