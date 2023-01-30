import React from 'react';
import { Link } from 'react-router-dom';
import { GiRotaryPhone } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { IoMdMailOpen } from "react-icons/io";
import { GiLotus } from "react-icons/gi";


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
                                    <button type="" className="btn btn-primary shadow p-1 mb-5 rounded-1"><a href='/contactForm'></a>Learn More</button>
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
                                    <button type="" className="btn btn-primary shadow p-1 mb-5 rounded-1"><a href='/contactForm'></a>Learn More</button>
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
                                    <button type="" className="btn btn-primary shadow p-1 mb-5 rounded-1"><a href='/contactForm'></a>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>

            {/* Footer start */}
            <div id='footer' className="bg-white shadow p-3 mt-5 bg-body-tertiary"  >
                <div className="footer-blue ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-4">
                                <div className="row">
                                    <div className="region region-footer-firstcolumn">
                                        <div id="block-block-2" className="block block-block">
                                            <div className="content">
                                                <div className="toll col-md-14 d-flex "><span className="fs-1 p-2" >< GiRotaryPhone /></span><br /> +91 0422-6612300 <br /> +91 0422-2228422</div>
                                                <div className="toll col-md-14 d-flex "><span className="fs-1 p-2"><ImPhone /></span><p className='mt-3'>National Cyber Crime Helpline Number:<b>1930</b> </p></div>
                                                <div className="corporate col-md-14 d-flex "><span className="fs-1 p-2">< IoMdHelpCircle /></span><span className='mt-3 text-center'><b>DigiSaathi 24x7 Toll Free Helpline No.s</b><br /> 1800-891-3333 / 14431<br /><small>Managed by NPCI, on behalf of Indian payment ecosystem</small></span></div>
                                                <div className="toll col-md-14 d-flex"><span className="fs-1 p-1"><IoMdMailOpen /></span><p className='m-4'><b>support@psl.co.in</b></p></div>
                                                <div className="location col-md-14"><span className="fs-1 p-1"><GiLotus /></span><strong>PSL Bank Ltd.,</strong>
                                                    <div className="db">Head Office, PSL Bhavan,</div>
                                                    <div className="db">Bangalore, India</div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-sm-8 ">
                                <div className="row p-3">
                                    <div className="col-md-3 col-xs-6">
                                        <div className="region region-footer-secondcolumn">
                                            <div id="block-menu-block-1" className="block block-menu-block"><h6>Quick Access</h6>
                                                <div className="content">
                                                    <div className="menu-block-wrapper menu-block-1 menu-name-menu-clone-main-menu parent-mlid-0 menu-level-1">
                                                        <ul className="menu">
                                                            <li className="leaf menu-mlid-688"><Link to="https://www.csb.co.in/application-forms" title="Application Forms" style={{ textDecoration: "none" }}>Application Forms</Link></li>
                                                            <li className="leaf menu-mlid-821"><a href="https://www.csb.co.in/careers">Careers</a></li>
                                                            <li className="leaf menu-mlid-483"><a href="https://www.csb.co.in/contact-us" title="Contact Us">Contact Us</a></li>
                                                            <li className="leaf menu-mlid-879"><a href="https://www.csb.co.in/COVID-19">COVID-19</a></li>
                                                            <li className="leaf menu-mlid-898"><a href="https://online.fliphtml5.com/qasrw/tidw/?1635162501701#p=1">Cyber Security</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="ABTUS" className="col-md-3 col-xs-6"><div className="region region-footer-thirdcolumn">
                                        <div id="block-block-14" className="block block-block">


                                            <div className="content">
                                                <h6>About Us</h6>
                                                <ul>
                                                    <li><a href="https://www.csb.co.in/about-us#board" title="Board of Directors">Board of Directors</a></li>
                                                    <li><a href="https://www.csb.co.in/pdf/List-of-Sub-Committees-of-the-Board_wef-17112022.pdf" title="Board Committees">Board Committees</a></li>
                                                    <li><a href="https://www.csb.co.in/about-us#vision" title="Key Managerial Personnel">Key Managerial Personnel</a></li>
                                                    <li><a href="https://www.csb.co.in/about-us#sm" title="Senior Management Team">Senior Management Team</a></li>
                                                    <li><a href="https://www.csb.co.in/investor-relations" title="Investor relations">Investor Relations</a></li>
                                                    <li><a href="https://www.csb.co.in/ipo" title="IPO">IPO</a></li>
                                                    <li><a href="https://www.csb.co.in/corporate-social-responsibility" title="Corporate Social Responsibility">Corporate Social Responsibility</a></li>
                                                    <li><a href="https://www.csb.co.in/atm" title="Social responsibility">Search IFSC/Branch/ATM</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-md-3 col-xs-6">
                                        <div className="region region-footer-fifthcolumn">
                                            <div id="block-menu-block-4" className="block block-menu-block"><h6>Useful Links</h6>
                                                <div className="content">
                                                    <div className="menu-block-wrapper menu-block-4 menu-name-menu-insurance parent-mlid-0 menu-level-1">
                                                        <ul className="menu"><li className="first leaf menu-mlid-519"><a href="https://www.csb.co.in/bank-policies" title="Bank Policies">Bank Policies</a></li>
                                                            <li className="leaf menu-mlid-518"><a href="https://www.csb.co.in/kyc-notice" title="Know Your Customer Norms">Know Your Customer Norms</a></li>
                                                            <li className="leaf menu-mlid-562"><a href="https://www.csb.co.in/sale-property" title="Sale of Property">Sale of Property</a></li>

                                                            <li className="leaf menu-mlid-692"><a href="https://www.rbi.org.in/" title="Reserve Bank of India" target="_blank">Reserve Bank of India</a></li>
                                                            <li className="leaf menu-mlid-691"><a href="https://www.csb.co.in/bcsbi">BCSBI</a></li>
                                                            <li className="leaf menu-mlid-835"><a href="https://www.csb.co.in/general-safety-tips">Safe Banking</a></li>

                                                            <li className="leaf menu-mlid-901"><a href="https://www.csb.co.in/pdf/BEAWARE.pdf" title="RBI - Customer Education on Frauds">RBI - Customer Education on Frauds</a></li>
                                                            <li className="last leaf menu-mlid-903"><a href="https://www.csb.co.in/pdf/MITC_CASA.pdf">Most Important Terms &amp; Conditions – Savings Bank/ Current Account</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer-ended */}
        </>

    )
}

export default Services;