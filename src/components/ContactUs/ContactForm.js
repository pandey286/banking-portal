import React, { useState } from 'react'
import { BsMailbox2 } from "react-icons/bs";
import axios from "axios";
import swal from "sweetalert";

const ContactForm = () => {

  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  const [formData, setFormData] = React.useState({
    userFullName: '',
    email: '',
    selectQuery: '',
    elaborateQuery: '',
  });

  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    body: ''
  });


  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

    setEmailData({
      ...emailData,
      to: formData.email,
      subject: `Enquery About ${formData.selectQuery}`,
      body: `Your Enquire about the ${formData.selectQuery} was submitted successfully we will contact you soon.`
    })
  };


  const contactUrl = "http://localhost:8080/api/enquiry/contactUs"
  const notificationurl = "http://localhost:8080/api/v1/notifications"

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(contactUrl, formData);
      const notification = await axios.post(notificationurl, emailData)
      setCookie("contactUs", JSON.stringify(response.data), 7);
      swal({
        title: "Your Query has been  Succesfully Submitted!! ",
        // text: "You have Successfully applied for a Card",
        icon: "success",
      })
      // console.log(response.data);
    } catch (error) {
      swal({
        title: "Query Submition Failed",
        text: "Your Query Submition was failed due to Some reason",
        icon: "warning",
      })
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className='contactUs-form p-5'>
        <div className='row shadow mb-5 p-3 bg-body rounded border-3 rounded-3 p-3'>
          <h2 className="mb-3">Contact Us Regarding Your Query <BsMailbox2 /></h2>
          <form>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" name="userFullName"
                onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" name="email"
                onChange={handleInputChange} required />
            </div>
            <div className="form-group mb-3">
              <label for="query">Select Your Query</label>
              <select className="form-control" id="query" name="selectQuery" onChange={handleInputChange}>
                <option>Account Opening</option>
                <option>New Card</option>
                <option>Regarding Transaction</option>
                <option>Regarding Loan</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Elaborate Your Query">
                Elaborate Your Query
              </label>
              <textarea className="form-control" id="Elaborate Your Query" name="elaborateQuery"
                onChange={handleInputChange} rows="10" required />
            </div>
            <button className="btn btn-danger mt-3" type="submit" onClick={handleSubmit}> Send Your Query</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
