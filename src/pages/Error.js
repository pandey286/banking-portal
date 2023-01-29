import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <section className='row'>
            <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
                <h1 className='display-3'>404</h1>
                <p className='lead fw-bold'> Page not found </p>
                <p>The requested URL <span className='text-danger text-lowercase'>
                    {window.location.pathname} </span> was not found</p>
                <p>
                    <Link to='/' className='btn btn-outline-primary'>Back to Home</Link>
                </p>
            </div>
        </section>
    )
}

export default Error;
