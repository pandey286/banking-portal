import React, { useState } from "react";
import Axios from "axios";
import swal from "sweetalert";
import Nav from "../.././Navbar"
import Fgp from '../images/ForgPass1.gif'

const ForgetPass = () => {

    const [errorMessage, setErrorMessage] = useState('');

    let otp = '';

    const [confirmPassword, setConfirmPassword] = useState({
        conPassword: ''
    });

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [mail, setMail] = useState({
        to: '',
        subject: '',
        body: ''
    });

    const [otpPass, setOtppass] = useState({
        otp: ''
    });

    const onInputChange = (event) => {
        let data = {
            ...formData,
            [event.target.name]: event.target.value
        };
        setFormData(data);
        let passData = {
            ...formData,
            [event.target.name]: event.target.value
        };
        setConfirmPassword(passData);
    };

    const url = 'http://localhost:8080/api/v1/notifications';
    const mailurl = `http://localhost:8080/api/customers/forget-password/${formData.email}`;

    const sendOTP = (event) => {
        event.preventDefault();
        setErrorMessage('');
        const otpArr = ['P', 'S', 'L', 'A', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let i = 0; i < 6; i++) {
            otp += otpArr[Math.floor(Math.random() * 10)];
        }
        console.log(otp);

        if (!formData.email || !formData.password || !confirmPassword.conPassword) {
            setErrorMessage('Email, password and confirm password are required');
        } else if (formData.password.length < 6) {
            setErrorMessage('Password must be at least 6 characters long');
        } else if (formData.password !== confirmPassword.conPassword) {
            setErrorMessage('passwords are not same');
        } else {
            let mailData = {
                ...mail,
                to: formData.email,
                subject: 'Reset Password',
                body: `OTP for resetting your PSL Online Banking account password is ${otp}`
            };
            setMail(mailData);
            Axios.post(url, mailData)
                .then(() => {
                    swal({
                        title: 'OTP Send SuccessFully',
                        text: 'OTP is send to your Register Email',
                        icon: 'success'
                    });
                })
                .catch(() => {
                    swal({
                        title: 'OTP couldn\'t be send!',
                        text: 'Please check your password and confirm password ',
                        icon: 'warning',
                        dangerMode: true
                    });
                });
        }
    };

    const updatePass = (event) => {
        if (otpPass.otp === otp) {
            let mailData = {
                ...mail,
                to: formData.email,
                subject: 'Password Updation',
                body: 'Your password has been successfully updated'
            };
            Axios.put(mailurl, { password: formData.password })
                .then(() => {
                    setMail(mailData);
                    Axios.post(url, mailData);
                    swal({
                        title: 'Password Updated Successfully',
                        text: 'You can now login with your new password',
                        icon: 'success'
                    });
                    window.location.href='/login'
                })
                .catch(() => {
                    swal({
                        title: 'Password couldn\'t be updated!',
                        text: 'Please check your password and try again',
                        icon: 'warning',
                        dangerMode: true
                    });
                });
        } else {
            setErrorMessage('OTP is incorrect');
        }
    };


    return (
        <>
            <Nav />
            <div className="row">
                <div className="col-xl-5 h-100  d-flex justify-content-center">
                    <img src={Fgp} alt="Sample photo" className="img-fluid register-photo mt-5 pt-5" />
                </div>
                <div className='d-flex justify-content-center m-5 p-5 col '>
                    <div className='row shadow-lg p-3 mb-5 bg-body-tertiary rounded-3 p-3'>
                        <h2 className='text-center p-3 '> Forgot Password </h2>
                        <div className="row">
                            <form>

                                <div className="p-3 col-md-12 ">
                                    <input type="email" name="email" onChange={onInputChange} className="form-control shadow-sm  " id="userEmail" aria-describedby="UserEmail"
                                        placeholder="Enter Your Email" />
                                </div>
                                <div className="p-3 col-md-12 ">
                                    <input type="password" name="password" onChange={onInputChange} className="form-control  shadow-sm " id="NewPassword1"
                                        placeholder="New Password" />
                                </div>
                                <div className="p-3 col-md-12 ">
                                    <input type="password" name="conPassword" onChange={onInputChange} className="form-control  shadow-sm " id="CPassword1"
                                        placeholder="Confirm Password" />
                                </div>
                                <div className="text-center">
                                    {errorMessage && <div className='alert alert-danger mt-3' role='alert'>{errorMessage}</div>}
                                </div>
                                <div className="row">

                                    <div className="col-md-6 p-3">
                                        <button type="submit" className="btn btn-outline-primary shadow p-1 mb-5 rounded-1" onClick={sendOTP}>Send OTP</button>
                                    </div>
                                    <div className="col-md-6 p-3">
                                        <input type="text" name="otp" className="form-control shadow-sm" placeholder="Enter the email OTP" />
                                    </div>
                                </div>

                                <div className="text-center p-3">
                                    <button type="submit" className="btn btn-outline-primary shadow p-1 mb-5 rounded-1" onClick={updatePass}>Submit</button><br />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ForgetPass;