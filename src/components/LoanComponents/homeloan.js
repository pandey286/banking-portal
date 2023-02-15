import React from "react";
import { useState } from "react";


const HomeLoan = () => {

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
                    <p className="title fs-1">Home Loan</p>
                </div>
                <hr />
                <div className="d-flex">

                    <div className="region region-content">

                        <p>
                            <p className="fs-5"> <b> HOME LOAN AT PSL BANK </b> </p>
                            That's one of the biggest and most significant things in everyone's life.
                            Choose the right home, opt for the housing loan that suits you best and you are settled for life.
                            And remember, when you go for a housing loan, you stand to enjoy tax benefits too. All the more reason
                            why you needn't have second thoughts when applying for a housing loan, especially one with Bank!
                        </p>

                        <p className="sub-title fs-5 "> <b>Bank Home Loans - Interest Rates slashed </b></p>
                        <p>Home Loans now at 9.69%* p.a. for loans upto Rs 75 lakhs and 9.94%* p.a. for loans above Rs 75 lakhs.</p>
                        <p>(*Interest rates are subject to change Floating interest rate linked to RLLR)</p>

                        <p>
                            <p className="fs-5 "> <b> Affordable home loans from Bank with attractive features like: </b> </p>

                            <ol className="common-ul ">
                                <li>Quick processing.</li>
                                <li>Simple documentation.</li>
                                <li>Zero prepayment penalty.</li>
                                <li>Loans for both residents & NRIs.</li>
                                <li>More benefits with PMAY (Pradhan Mantri Awas Yojana)</li>
                            </ol>
                        </p>

                        <p className="sub-title fs-5"> <b>Other Home Loan Products </b></p>
                        <p>
                            <ol className="common-ul">
                                <li>Bank Loan - For purchase of land and further construction within three years.</li>
                            </ol>
                        </p>

                        <p className="sub-title fs-5"><b>Documents for Education Loan for salaried individuals: </b> </p>
                        <p>
                            <ol>
                                <li>KYC documents</li>
                                <li>Bank Statement / Pass Book of last 6 months</li>
                                <li>Optional – Guarantor Form</li>
                                <li>Copy of Electric bills, Ration card</li>
                                <li>Copy of mortgage bond papers (if any)</li>
                            </ol>

                        </p>
                        <p><button type="button" className="btn btn-info p-2"><a href="/contactuS" style={{ color: "white", textDecoration: "none" }}>To Know More Contact Us</a></button></p>
                    </div>
                </div>
            </section>

            <section>
                    <div className='card ms-5 me-5'>
                        <div className="card-header fw-bold text-center">
                            <h1 className="title">Home Loan Calculator</h1>
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

export default HomeLoan;