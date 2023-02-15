import React from "react";
import { useState } from "react";


const PersonalLoan = () => {

    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    const calculatePayment = () => {
        const r = interestRate / 100 / 12;
        const n = loanTerm * 12;
        const payment = loanAmount * r * (1 + r) ** n / ((1 + r) ** n - 1);
        setMonthlyPayment(payment.toFixed(2));
    };

    return (
        <>

<section className="container-fluid col-lg-10 text-dark">
                <div className="mt-5 pt-5">
                    <p className="title fs-1">Personal Loan</p>
                </div>
                <hr />
                <div className="d-flex">

                    <div className="region region-content ">

                        <p>
                         <b className="fs-5"> Availing an Personal Loan from PSL Bank requires you to fulfil certain eligibility criteria. Find out the eligibility criteria for Personal Loan, below. </b>                        
                         PSL Bank Personal Loans offer fast processing of your loan. Personal Loans can be used for plenty of purposes! They can be availed when you are planning a vacation, renovating your home or arranging a dream wedding for yourself or somebody special in the family. Now you need not postpone things on your bucket list! You can get a Personal Loan from Rs. 50,000 upto Rs. 40,00,000 with minimal documentation and quick processing from PSL Bank. Also, you can transfer your existing high interest Personal Loan to PSL Bank as well. With a quick approval on PSL Bank Personal Loans, turn your dreams into reality!
                        </p>

                        <p>(*Interest rates are subject to change Floating interest rate linked to RLLR)</p>


                        <p className="sub-title fs-5"> <b> Few details of the PSL personal bank loan  </b> </p>

                        <p>

                            <ol className="common-ul">
                                <li> <b>Max Loan :</b> Amount	Rs. 40 Lakhs</li>
                                <li>  <b>Max Loan Tenure:</b>	Up to 60 months</li>
                                <li> <b>Interest Rateup to :</b> 2% of loan amount + GST</li>
                            </ol>
                        </p>

                        <p className="sub-title"> 
                         <p className="fs-5"><b>Documents for Personal Loan for salaried individuals: </b> </p>
                            <ol>
                            <li>KYC documents</li>
                            <li>Bank Statement / Pass Book of last 6 months</li>
                            <li>Optional – Guarantor Form</li>
                            <li>Detailed description of purpose of loan</li>
                            <li>Credit score and other mortgage bond copies (if any)</li>
                            </ol>
                        </p>
                        <p><button type="button" className="btn btn-info p-2"><a href="/contactuS" style={{color:"white", textDecoration: "none"}}>To Know More Contact Us</a></button></p>
                    </div>
                </div>
            </section>

            <section>
                    <div className='card ms-5 me-5'>
                        <div className="card-header fw-bold text-center">
                            <h1 className="title">Personal Loan Calculator</h1>
                        </div>
                        <div className="card-body row d-flex justify-content center">
                            <div className="col-md-6 mb-4">
                                <span className='fs-4 fw-bold'>Loan Amount ₹ : </span>
                            </div>
                            <div className="form-outline col-md-6 mb-4">
                                <input className="input form-control form-control-lg" type="text" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder='Loan Amount' />
                            </div>

                            <div className="col-md-6 mb-4">
                                <span className='fs-4 fw-bold'>Interest Rate (%):</span>
                            </div>
                            <div className="form-outline col-md-6 mb-4">
                                <input className="input form-control form-control-lg" type="text" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder='Interset Rate' />
                            </div>

                            <div className="col-md-6 mb-4">
                                <span className='fs-4 fw-bold '>Loan Term (years):</span>
                            </div>
                            <div className="form-outline col-md-6 mb-4">
                                <input className="input form-control form-control-lg" type="text" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} placeholder='Loan Term' />
                            </div>
                            <div className="col-md-12 mb-4 text-center">
                                <button className="btn btn-outline-info col-md-6 fw-bold" onClick={calculatePayment}>
                                    Calculate
                                </button>
                            </div>
                            <div className="card-footer text-center fw-bold fs-4">
                                <span className="payment">Monthly Payment(₹): {monthlyPayment} ₹</span>
                            </div>
                        </div>
                    </div>
                </section>


        </>
    )
}

export default PersonalLoan;