import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <>
      <div className='About-Us mt-5'>

        {/* <!-- For demo purpose --> */}
        <div className="container p-5">
          <div className="row text-center text-white">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-4 fs-1">Our Team</h1>
              <p className="lead mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ratione voluptas error sunt soluta voluptate similique voluptatem. Magni sunt natus voluptas ipsum explicabo, unde suscipit libero placeat non. Fugiat, soluta!</p>
              <p className="lead fs-4"> – Andrew Carnegie</p>
            </div>
          </div>
        </div>
        {/* <!-- End --> */}


        <div className="container">
          <div className="row text-center">

            {/* <!-- Team item --> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow mb-5 py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Sayeri Samanta</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link" ><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* <!-- End --> */}

            {/* <!-- Team item --> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow mb-5 py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-2.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Prashant Pandey</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* <!-- End --> */}

            {/* <!-- Team item --> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow mb-5 py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">J Lasya</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* <!-- End --> */}

            {/* <!-- Team item --> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow mb-5 py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-team/teacher-7.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">John Tarly</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* <!-- End --> */}
          </div>
        </div>
      </div>
    </>

  );
};


export default AboutUs;
