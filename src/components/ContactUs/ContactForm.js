import React from 'react'
import { BsMailbox2 } from "react-icons/bs";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    query: "",
    message: "",
    hasAccount: false,
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setFormData({
      ...formData,
      hasAccount: event.target.checked,
    });
  };


  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    console.log(formData);
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  return (
    <div className="container mt-5">
      <div className='contactUs-form p-5'>
        <div className='row shadow mb-5 p-3 bg-body rounded border-3 rounded-3 p-3'>
          <h2 className="mb-3">Contact Us Regarding Your Query <BsMailbox2 /></h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control"  type="text"  id="name"  name="name" value={formData.name}  
              onChange={handleInputChange}  required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control"  type="email" id="email"  name="email" value={formData.email}
                onChange={handleInputChange} required />
            </div>
            <div className="form-group mb-3">
              <label for="query">Select Your Query</label>
              <select className="form-control" id="query"
                name="query" value={formData.query} onChange={handleInputChange}>
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
              <textarea className="form-control" id="Elaborate Your Query" name="message" value={formData.message} 
              onChange={handleInputChange} rows="10" required/>
            </div>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="hasAccount" name="hasAccount" checked={formData.hasAccount} 
              onChange={handleCheckboxChange}/>
              <label className="form-check-label" htmlFor="hasAccount">Do you have Account in our Bank ? </label>
            </div>
            <button className="btn btn-danger mt-3" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
