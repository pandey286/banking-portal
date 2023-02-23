import React from "react";
import { useState } from "react";

const GoldLoan = () => {

    const [weight, setWeight] = useState(0);
    const [karat, setKarat] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
  
    const marketRate = 5000; // Assuming Rs. 5000 per gram of gold
    const loanToValueRatio = 0.8; // Assuming the loan amount is 80% of the gold's market value
  
    const handleWeightChange = (event) => {
      setWeight(parseFloat(event.target.value));
    };
  
    const handleKaratChange = (event) => {
      setKarat(parseInt(event.target.value));
    };
  
    const handleInterestRateChange = (event) => {
      setInterestRate(parseFloat(event.target.value));
    };
  
    const calculateLoanAmount = () => {
      const purity = karat / 24;
      const value = weight * marketRate * purity;
      const interest = (interestRate / 100) * value;
      const totalValue = value + interest;
      const loanAmount = totalValue * loanToValueRatio;
      setLoanAmount(loanAmount);
    };

    return (
        <>

            <div className="mt-5 pt-3">
                {/* Info Section */}
                <section className="container-fluid col-lg-10 text-dark">
                    <div>
                        <p className="title fs-1">Gold Loan</p>
                    </div>
                    <hr />
                    <div className="d-flex">

                        <div className="region region-content">
                            <p>
                            Sovereign Gold Bond Scheme was launched by Govt in November 2015, under Gold Monetisation Scheme. Under the scheme, the issues are made open for subscription in tranches by RBI in consultation with GOI. RBI Notifies the terms and conditions for the scheme from time to time. 
                            </p>
                            <p className="sub-title"><b>Gold Loans - Interest Rates slashed</b></p>
                            <p><em>The Bonds will be denominated in multiples of gram(s) of gold with a basic unit of 1 gram.</em></p>
                            
                            <p>Minimum permissible investment will be 1 gram of gold.</p>
                            <p>The maximum limit of subscribed shall be 4 KG for individual, 4 Kg for HUF and 20 Kg for trusts and similar entities per fiscal year (April-March) notified by the Government from time to time. A self-declaration to this effect will be obtained. The annual ceiling will include bonds subscribed under different tranches during initial issuance by Government and those purchase from the Secondary Market.</p>
                            <p>In case of joint holding, the investment limit of 4 KG will be applied to the first applicant only.</p>
                            <p>Payment for the Bonds will be through cash payment (up to a maximum of Rs. 20,000/-) or demand draft or cheque or electronic banking.</p>
                            <p>The Gold Bonds will be issued as Government of India Stocks under Government Security Act, 2006. The investors will be issued a Holding Certificate for the same. The Bonds are eligible for conversion into Demat form.</p>
                            <p>The investors will be compensated at a fixed rate of 2.50 per cent per annum payable semi-annually on the nominal value.
Bonds can be used as collateral for loans. The loan-to-value (LTV) ratio is to be set equal to ordinary gold loan mandated by the Reserve Bank from time to time. The lien on the bond shall be marked in the depository by the authorised banks.</p>
                            <p><strong><i>Note : The loan against SGBs would be subject to decision of the bank/financing agency and cannot be inferred as a matter of right.</i></strong></p>
                            
                            <div className="card">
                                    <div className="card-header bg-secondary fs-1">
                                        Gold Loan Details
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table bg-white shadow-sm  text-center table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Scheme</th>
                                                        <th scope="col">Max Period</th>
                                                        <th scope="col">Interest Rate</th>
                                                        <th scope="col">Maximum Loan Amount</th>
                                    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>10 grams</td>
                                                        <td>1 year</td>
                                                        <td>7%</td>
                                                        <td>Rs. 60 Thousands</td>
                                                        
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td>25 grams</td>
                                                        <td>1.5 year</td>
                                                        <td>8%</td>
                                                        <td>2 lakhs</td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <td>50 grams</td>
                                                        <td>2 year</td>
                                                        <td>9%</td>
                                                        <td>4 lakhs</td>
                                                       
                                                    </tr>
                                                    <tr>
                                                        <td>1kg</td>
                                                        <td>2.5 year</td>
                                                        <td>9%</td>
                                                        <td>10 lakhs</td>
                                                       
                                                    </tr>
                                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>



                            <p>
                                <ul className="common-ul">
                                    <li>Easy and hassle-free loan process.</li>
                                    <li>Gold loans will be granted only to individuals.</li>
                                    <li>Loan will be granted after getting the jewels duly appraised by the jewel appraiser engaged by the Bank.</li>
                                    <li>22 carat Gold’s are accepted as security.</li>
                                    <li>Repayment of Gold Loans depends on the scheme in which the ornaments has been pledged.</li>
                                </ul>
                            </p>
                            <p className="sub-title">Requirements</p>
                            <p>
                                For the information regarding the documents and other requirements for the loan application
                            </p>
                            <p><button type="button" className="btn btn-info p-2"><a href="/contactuS" style={{ color: "white", textDecoration: "none" }}>To Know More Contact Us</a></button></p>
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section>
                    <div className='card ms-5 me-5'>
                        <div className="card-header fw-bold text-center">
                            <h1 className="title">Gold Loan Calculator</h1>
                        </div>
                        <div className="card-body row d-flex justify-content center">
                            <div className="col-md-6 mb-4">
                                <span className='fs-4 fw-bold'>Weight (In Grams ) : </span>
                            </div>
                            <div className="form-outline col-md-6 mb-4">
                                <input className="input form-control form-control-lg" type="number" value={weight} onChange={handleWeightChange}  placeholder='Loan Amount' />
                            </div>

                            <div className="col-md-6 mb-4">
                                <span className='fs-4 fw-bold'>Interest Rate (%):</span>
                            </div>
                            <div className="form-outline col-md-6 mb-4">
                                <input className="input form-control form-control-lg" type="number" value={interestRate} onChange={handleInterestRateChange} placeholder='Interset Rate' />
                            </div>

                            <div className="col-md-6 mb-4">
                                <span className='fs-4 fw-bold '>Gold Quality (karat):</span>
                            </div>
                            <div className="form-outline col-md-6 mb-4">
                                <input className="input form-control form-control-lg" type="number" value={karat} onChange={handleKaratChange}  placeholder='Loan Term' />
                            </div>
                            <div className="col-md-12 mb-4 text-center">
                                <button className="btn btn-outline-info col-md-6 fw-bold" onClick={calculateLoanAmount}>
                                    Calculate
                                </button>
                            </div>
                            <div className="card-footer text-center fw-bold fs-4">
                                <span className="payment">Loan Amount: Rs. {loanAmount.toFixed(2)} ₹</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default GoldLoan;