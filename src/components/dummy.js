import React from "react";
import "../../../css/forgotPassword.css"
import forgotPass from "../../../img/A2.gif"
import { useState } from "react";
import Axios from "axios";
import swal from "sweetalert";
const ForgotPassword = () => {
    const [errorMessage, setErrorMessage] = useState('');
    let otp=''
    const [mail, setMail] = useState({
        to: "",
        subject: "",
        text: ""
    })
    const [confirmPassword, setConfirmPassword] = useState({
        cPassword: ""
    });
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
    const [otpass, setOtpass] = useState({
        otp:""
    })
    const onInputChange = (event) => {
        let data = {
            ...formData,
            [event.target.name]: event.target.value
        }
        setFormData(data)
        let passData = {
            ...formData,
            [event.target.name]: event.target.value
        }
        setConfirmPassword(passData)
        // let otpData = {
        //     ...otpass,
        //     [event.target.name]: event.target.value
        // }
    }
    const url = "http://localhost:8080/api/email/notifications";
    const mailUrl = `http://localhost:8080/api/users/reset-password/${formData.email}`;
    const sendOTP = (event) => {
        event.preventDefault();
        setErrorMessage('');
        const otpArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        for (let i = 0; i < 6; i++ ) {
            otp += otpArr[Math.floor(Math.random() * 10)];
        }
        console.log(otp)
        if (!formData.email || !formData.password || !confirmPassword.cPassword) {
            setErrorMessage('Email, password and confirm password are required');
        } else if (formData.password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long');
        } else if (formData.password !== confirmPassword.cPassword) {
            setErrorMessage('passwords are not same');
        } else {
            let mailData = {
                ...mail,
                to: formData.email,
                subject: "Reset Password",
                text: `OTP for resetting you BANKER account password is ${otp}`
            }
            setMail(mailData)
            Axios.post(url, mail)
            .then(() => {
                swal({
                    title: "OTP Sent",
                    text:"OTP send to your account",
                    icon: "success"
                })
            })
            .catch(() => {
                swal({
                    title: "OTP couldn't send!",
                    text: "Check your passwords!",
                    icon: "warning",
                    dangerMode: true,
                });
            })
        }
    }
    const updatePass = () => {
        if(otpass.otp === otp){
            let mail = {
                ...mail,
                to: formData.email,
                subject: "Password updated",
                text: "Your BANKER account password updated"
            }
            console.log(mail);
            setMail(mail)
            Axios.put(mailUrl, formData)
            .then(res => {
                console.log(res.data);
                swal({
                    title: "Password Updated",
                    text:"Your password updated succesfully",
                    icon: "success"
                }).then(() => {
                    Axios.post(mailUrl, mail)
                    window.location.href = "/login";
                });
            })
            .catch(err => {
                console.log(err);
                swal({
                    title: "OTP couldn't send!",
                    text: "Check your passwords!",
                    icon: "warning",
                    dangerMode: true,
                });
            })
        }
    }
    return(
        <>
            <section className="container-fluid col-lg-10">
                <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="p-4">Reset Password</h2>
                                    <hr />
                                    <form className="p-4">
                                        <div className="form-group">
                                            <label className="mb-1">Email</label>
                                            <input type="email" name="email" onChange={onInputChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">New Password</label>
                                            <input type="password" name="password" onChange={onInputChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1">Confirm Password</label>
                                            <input type="password" name="cPassword" onChange={onInputChange}/>
                                        </div>
                                        <div className="text-center">
                                            {errorMessage && <div className='alert alert-danger mt-3' role='alert'>{errorMessage}</div>}
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 form-group py-2 text-center">
                                                <button type="button" className="btn btn-primary shadow" onClick={sendOTP}>Send OTP</button>
                                            </div>
                                            <div className="col-lg-8 py-2 form-group">
                                                <input type="text" name="otp"/>
                                            </div>
                                        </div>
                                        <div className="form-group py-4 text-center">
                                            <button type="button" className="btn btn-primary shadow w-25" onClick={updatePass}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-6 border-start pt-5">
                                    <img src={forgotPass} alt="image" className="forgotImg w-100 pt-5 pe-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}
export default ForgotPassword;