import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './admindash.css'

class AdminDashboard extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">


          <Col xs={12}>
            <h1>Welcome to the Admin Dashboard<button className='btn btn-danger'><Link to="/">Logout</Link></button></h1>

          </Col>
        </Row>
        <Row>
          <Form inline>



            <div className="viewAll">

              <form className="form-card">
                <p className="p"><h3>User Credentials</h3></p>
                <div class="form-grid">

                  <div class="form-row">
                    <label>Name</label>
                    <input type="text" />
                  </div>
                  <div class="form-row">

                    <label>Account Number</label>
                    <input type="text" />
                  </div>

                  <div class="form-row">
                    <label> Account Type</label>
                    <input type="text" />
                  </div>

                  <div class="form-row">
                    <label> PAN_No</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="text-center pt-4">
                  <button type="submit" className="btn btn-primary">Search User</button>
                </div>
              </form>

              <div className="col data-table mt-4">
                <h5 className="mb-2">User Database</h5>
               
                <table className="table bg-white shadow-sm  text-center table-hover">
                  <thead>
                    <tr>
                      <th scope="col">User_Id</th>
                      <th scope="col">User_Name</th>
                      <th scope="col">User_Email</th>
                      <th scope="col">Adhar_Card</th>
                      <th scope="col">PAN_Card</th>
                      <th scope="col">Transactions</th>
                      <th scope="col">Status</th>
                      <th scope="col">Contact_Info</th>
                      <th scope="col">DOB</th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TRANS0000012</td>
                      <td>@zoro</td>
                      <td>zoro12@example.com</td>
                      <td>7726-8766-2983</td>
                      <td>KJQP0890L</td>
                      <td>TRANS0000012</td>
                      <td className="fa fa-check-circle success"></td>
                      <td>1234567897</td>
                      <td>08.3.1999</td>
                      <td>Bangalore,India</td>
                    </tr>
                    <tr>
                      <td>TRANS0000012</td>
                      <td>@zoro</td>
                      <td>zoro12@example.com</td>
                      <td>7726-8766-2983</td>
                      <td>KJQP0890L</td>
                      <td>TRANS0000012</td>
                      <td className="fa fa-check-circle success"></td>
                      <td>1234567897</td>
                      <td>08.3.1999</td>
                      <td>Bangalore,India</td>
                    </tr>
                    <tr>
                      <td>TRANS0000012</td>
                      <td>@zoro</td>
                      <td>zoro12@example.com</td>
                      <td>7726-8766-2983</td>
                      <td>KJQP0890L</td>
                      <td>TRANS0000012</td>
                      <td className="fa fa-check-circle success"></td>
                      <td>1234567897</td>
                      <td>08.3.1999</td>
                      <td>Bangalore,India</td>
                    </tr>
                    <tr>
                      <td>TRANS0000012</td>
                      <td>@zoro</td>
                      <td>zoro12@example.com</td>
                      <td>7726-8766-2983</td>
                      <td>KJQP0890L</td>
                      <td>TRANS0000012</td>
                      <td className="fa fa-check-circle failed"></td>
                      <td>1234567897</td>
                      <td>08.3.1999</td>
                      <td>Bangalore,India</td>
                    </tr>
                    <tr>
                      <td>TRANS0000012</td>
                      <td>@zoro</td>
                      <td>zoro12@example.com</td>
                      <td>7726-8766-2983</td>
                      <td>KJQP0890L</td>
                      <td>TRANS0000012</td>
                      <td className="fa fa-check-circle failed"></td>
                      <td>1234567897</td>
                      <td>08.3.1999</td>
                      <td>Bangalore,India</td>
                    </tr>
                    <tr>
                      <td>TRANS0000012</td>
                      <td>@zoro</td>
                      <td>zoro12@example.com</td>
                      <td>7726-8766-2983</td>
                      <td>KJQP0890L</td>
                      <td>TRANS0000012</td>
                      <td className="fa fa-check-circle failed"></td>
                      <td>1234567897</td>
                      <td>08.3.1999</td>
                      <td>Bangalore,India</td>
                    </tr>
                    <tr>
                      <td>TRANS0000012</td>
                      <td>@zoro</td>
                      <td>zoro12@example.com</td>
                      <td>7726-8766-2983</td>
                      <td>KJQP0890L</td>
                      <td>TRANS0000012</td>
                      <td className="fa fa-check-circle success"></td>
                      <td>1234567897</td>
                      <td>08.3.1999</td>
                      <td>Bangalore,India</td>
                    </tr>
                  </tbody>
                </table>
                
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-danger">Delete User</button>
            </div>
          </Form>
        </Row>

      </Container>
    );
  }
}

export default AdminDashboard;