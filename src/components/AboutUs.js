import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Prash from '../images/AboutImg/Prashant.jpg'
import Say from '../images/AboutImg/SayeriImg1.jpeg'
import JL from '../images/AboutImg/JL_img.jpeg';
import Apo from '../images/AboutImg/Apoorava.jpeg'

const AboutUs = () => {
  return (
    <>
      <div className='About-Us mt-5'>

        {/* <!-- For demo purpose --> */}
        <div className="container p-5">
          <div className="row text-center text-dark">
            <div className="col-lg-8 mx-auto">
              <h1 className="display-4 fs-1">Our Team</h1>
              <p className="lead mb-0">The Indian banking industry has always been full of competition, and there is enough room for growth</p>
              <p className="lead fs-4">-Chanda Kochhar</p>
            </div>
          </div>
        </div>
        {/* <!-- End --> */}


        <div className="container">
          <div className="row text-center">

            {/* <!-- Team item --> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow mb-5 py-5 px-4"><img src={Say} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
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
              <div className="bg-white rounded shadow mb-5 py-5 px-4"><img src={Prash} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Prashant Pandey</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=100012775172400" target="_blank" className="social-link" ><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://twitter.com/Prashan72867242" target="_blank" className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.instagram.com/pandey__prashant__/"  target="_blank" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/prashant-pandey-57191a216/" target="_blank" className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* <!-- End --> */}

            {/* <!-- Team item --> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow mb-5 py-5 px-4"><img src={JL} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Lasya Jonnalagadda</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="https://www.facebook.com/lasya.jonnalagadda" target="_blank"className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://twitter.com/LasyaJonnalaga1" target="_blank"className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="https://instagram.com/lasya__45?igshid=ZDdkNTZiNTM=" target="_blank"className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/lasya-jonnalagadda/" target="_blank"className="social-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            {/* <!-- End --> */}

            {/* <!-- Team item --> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow mb-5 py-5 px-4"><img src={Apo} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Apoorva Laddipirla</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <ul className="social mb-0 list-inline mt-3">
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
                  <li className="list-inline-item"><a href="https://twitter.com/apoorva18001" target="_blank"className="social-link"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/apoorva-laddipirla-635221238/" target="_blank"className="social-link"><i className="fa fa-linkedin"></i></a></li>
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
