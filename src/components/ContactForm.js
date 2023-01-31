import React from 'react'
import { BsMailbox2 } from "react-icons/bs";

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }

  return (
    <div className="container mt-5  ">
      <div className='contactUs-form p-5'>
        <div className='row shadow mb-5 p-3 bg-body rounded border-3 rounded-3 p-3'>
          <h2 className="mb-3">Contact Us Regarding Your Query <BsMailbox2 /></h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-control" type="email" id="email" required />
            </div>


            <div class="form-group mb-3">
              <label for="exampleFormControlSelect1">Select Your Query</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Account Opening</option>
                <option>Regarding Transaction</option>
                <option>Regarding Loan</option>
                <option>Other</option>
              </select>

            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Elaborate Your Query">
                Elaborate Your Query
              </label>
              <textarea className="form-control" id="Elaborate Your Query" required  rows="10" />
            </div>
            <button className="btn btn-danger mt-3" type="submit">
              {formStatus}
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
export default ContactForm