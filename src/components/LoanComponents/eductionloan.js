import React from "react";
import { useState } from "react";

const EducationLoan = () => {

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
                    <p className="title fs-1">Education Loan</p>
                </div>
                <hr />
                <div className="d-flex">

                    <div className="region region-content ">

                        <p>
                         <b className="fs-5"> Availing an Education Loan from PSL Bank requires you to fulfil certain eligibility criteria. Find out the eligibility criteria for Education Loan, below. </b>                        
                         <p>PSL Bank provides Education Loans for students looking to study in India and abroad. You can get a loan starting from Rs. 50,000 at attractive interest rates with benefits such as no pre-payment charges and no pre-closure charges. Find out the education loan eligibility criteria for availing an PSL Bank student loan. </p>

                        </p>

                        <p>(*Interest rates are subject to change Floating interest rate linked to RLLR)</p>


                        <p className="sub-title fs-5"> <b> The Education Loan will be provided to those students who have  </b> </p>

                        <p>

                            <ol className="common-ul">
                                <li>Indian Citizenship</li>
                                <li>Secured at least 50% marks during HSC & Graduation</li>
                                <li>Who have obtained admission to career-oriented courses e.g. Medicine, Engineering, Management etc., either at the graduate or post-graduate level</li>
                                <li>Secured admission in India or Abroad through entrance test / merit based selection process post completion of HSC (10+2)</li>
                                <li>Documents displaying regular income is mandatory for the co-applicant( parents/sibling/guarantor)</li>
                            </ol>
                        </p>

                        <p className="sub-title"> 
                         <p className="fs-5"><b>Documents for Education Loan for salaried individuals: </b> </p>
                            <ol>
                            <li>KYC documents</li>
                            <li>Bank Statement / Pass Book of last 6 months</li>
                            <li>Optional – Guarantor Form</li>
                            <li>Copy of admission letter of the Institute along with fees schedule</li>
                            <li>Mark sheets / passing certificates of S.S.C., H.S.C, Degree courses</li>
                            </ol>
                        </p>
                        <p><button type="button" className="btn btn-info p-2"><a href="/contactuS" style={{color:"white", textDecoration: "none"}}>To Know More Contact Us</a></button></p>
                    </div>
                </div>
            </section>

            <section>
                    <div className='card ms-5 me-5'>
                        <div className="card-header fw-bold text-center">
                            <h1 className="title">Education Loan Calculator</h1>
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

export default EducationLoan;