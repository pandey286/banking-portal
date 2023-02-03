import React from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { Link } from "react-router-dom";

let SuccessIcon = { color: "green" };
let FailedIcon = { color: "red" };

const ViewTrans = () => {


    return (
        <>
            <div className="m-5" id="page-content">
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card align-middle">
                        <div className="card">
                            <div className="card-header bg-info fs-1">
                                All Transactions <GrTransaction />
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table bg-white shadow-sm  text-center table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Transaction Id</th>
                                                <th scope="col">Transaction Date</th>
                                                <th scope="col">Beneficiary</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>TRANS0000012</td>
                                                <td>4/11/2056</td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td><AiFillCheckCircle style={SuccessIcon} /></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0007718</td>
                                                <td>4/11/2056</td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td><AiFillCheckCircle style={SuccessIcon} /></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0000012</td>
                                                <td>4/11/2056</td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td><AiFillCloseCircle style={FailedIcon} /></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0007718</td>
                                                <td>4/11/2056</td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td ><AiFillCheckCircle style={SuccessIcon} /></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0000012</td>
                                                <td>4/11/2056</td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td><AiFillCloseCircle style={FailedIcon} /></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0007718</td>
                                                <td>4/11/2056</td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td><AiFillCloseCircle /></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0000012</td>
                                                <td></td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td><AiFillCheckCircle style={FailedIcon} /></td>
                                            </tr>
                                            <tr>
                                                <td>TRANS0007718</td>
                                                <td>4/11/2056</td>
                                                <td>Joe Doe</td>
                                                <td>$1200</td>
                                                <td><AiFillCheckCircle style={SuccessIcon} /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning shadow p-1 mb-5 rounded-1">
                            <Link to="/userdash" className="text-dark p-3" style={{ textDecoration: "none" }}>Back To Home</Link></button><br />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewTrans;