import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";
import { ImPhone } from "react-icons/im";
import { IoMdMailOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import Kakashi from "./kakashi.ico";

const Footer = () => {
    return (
        <>
            {/* Footer Section-start */}
            <div id='footer' className="section-footer"  >
                <div className="footer-blue ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-4">
                                <div className="row">
                                    <div className="region region-footer-firstcolumn">
                                        <div id="block-block-2" className="block block-block">
                                            <div className="content">
                                                <div className="toll col-md-14 d-flex "><span className="fs-1 p-3" >< GiRotaryPhone /></span> <p className='mt-2'><br />+91 0422-6612300 <br /> +91 0422-2228422</p></div>
                                                <div className="toll col-md-14 d-flex "><span className="fs-1 p-2"><ImPhone /></span><p className='mt-3'>National Cyber Crime Helpline Number:<b>1930</b> </p></div>
                                                <div className="corporate col-md-14 d-flex "><span className="fs-1 p-2">< IoMdHelpCircle /></span><span className='mt-3 text-center'><b>DigiSaathi 24x7 Toll Free Helpline No.s</b><br /> 1800-891-3333 / 14431<br /><small>Managed by NPCI, on behalf of Indian payment ecosystem</small></span></div>
                                                <div className="toll col-md-14 d-flex"><span className="fs-1 p-1"><IoMdMailOpen /></span><p className='m-4'><b>support@psl.co.in</b></p></div>
                                                <div className="location col-md-14"><span className="fs-1 p-1"><img className='mb-1' src={Kakashi} width="30px"/></span><strong>PSL Bank Ltd.,</strong>
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
                                                            <li className="leaf menu-mlid-688"><Link className="Link" to="https://www.csb.co.in/application-forms" title="Application Forms" style={{ textDecoration: "none" }}>Application Forms</Link></li>
                                                            <li className="leaf menu-mlid-821"><Link className="Link" to="https://www.csb.co.in/careers" title="Careers" style={{ textDecoration: "none" }}>Careers</Link></li>
                                                            <li className="leaf menu-mlid-483"><Link className="Link" to="https://www.csb.co.in/contact-us" title="Contact Us" style={{ textDecoration: "none" }}>Contact Us</Link></li>
                                                            <li className="leaf menu-mlid-879"><Link className="Link" to="https://www.csb.co.in/COVID-19" title="COVID-19" style={{ textDecoration: "none" }}>COVID-19</Link></li>
                                                            <li className="leaf menu-mlid-898"><Link className="Link" to="https://online.fliphtml5.com/qasrw/tidw/?1635162501701#p=1" title="Cyber Security" style={{ textDecoration: "none" }}>Cyber Security</Link></li>
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
                                                    <li><Link  className="Link" to="https://www.csb.co.in/pdf/List-of-Sub-Committees-of-the-Board_wef-17112022.pdf" title="Board Committees" style={{ textDecoration: "none" }}>Board Committees</Link></li>
                                                    <li><Link  className="Link" to="https://www.csb.co.in/about-us#board" title="Board of Directors" style={{ textDecoration: "none" }}>Board of Directors</Link></li>
                                                    <li><Link  className="Link" to="https://www.csb.co.in/about-us#vision" title="Key Managerial Personnel" style={{ textDecoration: "none" }}>Key Managerial Personnel</Link></li>
                                                    <li><Link  className="Link" to="https://www.csb.co.in/about-us#sm" title="Senior Management Team" style={{ textDecoration: "none" }}>Senior Management Team</Link></li>
                                                    <li><Link  className="Link" to="https://www.csb.co.in/investor-relations" title="Investor relations" style={{ textDecoration: "none" }}>Investor Relations</Link></li>
                                                    <li><Link  className="Link" to="https://www.csb.co.in/ipo" title="IPO" style={{ textDecoration: "none" }}>IPO</Link></li>
                                                    <li><Link  className="Link" to="https://www.csb.co.in/corporate-social-responsibility" title="Corporate Social Responsibility" style={{ textDecoration: "none" }}>Corporate Social Responsibility</Link></li>
                                                    <li><Link  className="Link" to="https://www.csb.co.in/atm" title="Social responsibility" style={{ textDecoration: "none" }}>Search IFSC/Branch/ATM</Link></li>
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
                                                        <ul className="menu">
                                                            <li className="first leaf menu-mlid-519"><Link className="Link" to="https://www.csb.co.in/bank-policies" title="Bank Policies" style={{ textDecoration: "none" }}>Bank Policies</Link></li>
                                                            <li className="leaf menu-mlid-518"><Link  className="Link" to="https://www.csb.co.in/kyc-notice" title="Know Your Customer Norms" style={{ textDecoration: "none" }}>Know Your Customer Norms</Link></li>
                                                            <li className="leaf menu-mlid-562"><Link  className="Link" to="https://www.csb.co.in/sale-property" title="Sale of Property" style={{ textDecoration: "none" }}>Sale of Property</Link></li>
                                                            <li className="leaf menu-mlid-692"><Link  className="Link" to="https://www.rbi.org.in/" title="Reserve Bank of IndLinka" target="_blank" style={{ textDecoration: "none" }}>Reserve Bank of India</Link></li>
                                                            <li className="leaf menu-mlid-691"><Link  className="Link" to="https://www.csb.co.in/bcsbi" style={{ textDecoration: "none" }}>BCSBI</Link></li>
                                                            <li className="leaf menu-mlid-835"><Link  className="Link" to="https://www.csb.co.in/general-safety-tips" style={{ textDecoration: "none" }}>Safe Banking</Link></li>
                                                            <li className="leaf menu-mlid-901"><Link  className="Link" to="https://www.csb.co.in/pdf/BEAWARE.pdf" title="RBI - Customer Education on Frauds" style={{ textDecoration: "none" }}>RBI - Customer Education on Frauds</Link></li>
                                                            <li className="last leaf menu-mlid-903"><Link  className="Link" to="https://www.csb.co.in/pdf/MITC_CASA.pdf" style={{ textDecoration: "none" }}>Most Important Terms &amp; Conditions – Savings Bank/ Current Account</Link></li>
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
            {/* Footer Section send */}

        </>
    )
}
export default Footer;