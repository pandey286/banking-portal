// import React, { useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import axios from 'axios';
// import UserNavbar from './Hero-Dashboard/UserNavbar';
// import UserSidebar from './Hero-Dashboard/UserSidebar';

// const Mini = () => {
//   const [formData, setFormData] = useState({
//     accountNumber: '',
//     fromDate: '',
//     toDate: ''
//   });

//   const [userDetails, setUserDetails] = useState([]);

//   const { accountNumber, fromDate, toDate } = formData;

//   const onChange = e =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async e => {
//     e.preventDefault();


//     try {
//       const response = await axios.get(`http://localhost:8080/api/transactions/date-range/${formData.fromDate}/${formData.toDate}/${formData.accountNumber}`);
//       const userDetails = response.data;
//       setUserDetails(userDetails);
//     } catch (error) {
//       console.error(error);
//       setUserDetails([]);
//     }

//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     const tableColumns = ["Payee Name", "Amount", " Transaction Type", "Previous Balance", "Current Balance", "Payee Acc no", "Transaction Date", "Transaction Status"];
//     const tableData = userDetails.map(user => [user.payeeName, user.transAmount, user.transType, user.prevBalance, user.currBalance, user.payeeAccountNumber, user.transDate, user.transStatus]);
//     doc.autoTable(tableColumns, tableData);
//     doc.save('account_statement.pdf');
//   };

//   return (
//     <>
//       <UserSidebar />
//       <UserNavbar />
//       <section style={{ paddingTop: '30px', paddingLeft: '300px' }}>
//         <div className="container mt-5">
//           <h1 className="main-theme text-white text-center">Account-Statement</h1>
//           <h5 className="text-center">
//             Short summary of recent transactions made on Your account
//           </h5>
//           <form onSubmit={onSubmit}>
//             <div className="form-group">
//               <label>Account Number</label>
//               <br />
//               <input
//                 className="form-control"
//                 type="text"
//                 name="accountNumber"
//                 placeholder="Select Account Number"
//                 value={accountNumber}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//             <br />
//             <div className="form-group">
//               <label>From</label>
//               <br />
//               <input
//                 className="form-control"
//                 type="date"
//                 name="fromDate"
//                 placeholder="Start Date"
//                 value={fromDate}
//                 onChange={onChange}
//                 required
//               />
//             </div>
//             <br />
//             <div className="form-group">
//               <label>To</label>
//               <br />
//               <input
//                 className="form-control"
//                 type="date"
//                 name="toDate"
//                 placeholder="End Date"
//                 value={toDate}
//                 onChange={onChange}
//                 required
//               />
//               <br />
//               <button className="btn btn-outline-info me-3" type="submit">
//                 Generate
//               </button>
//             </div>
//           </form>
//           {userDetails.length > 0 && (
//             <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
//               <table className="table">

//                 <thead>
//                   <tr>
//                     <th>Payee Name</th>
//                     <th>Payee Account Number</th>
//                     <th>Amount Transacted</th>
//                     <th>Transaction Type</th>
//                     <th>User Previous Balance</th>
//                     <th>User Current Balance</th>
//                     <th>Transaction Date</th>
//                     <th>Transaction Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>

//                   {userDetails.map(user => (
//                     <tr key={user.id}>
//                       <td>{user.payeeName}</td>
//                       <td>{user.payeeAccountNumber}</td>
//                       <td>{user.transAmount}</td>
//                       <td>{user.transType}</td>
//                       <td>{user.prevBalance}</td>
//                       <td>{user.currBalance}</td>
//                       <td>{user.transDate}</td>
//                       <td>{user.transStatus}</td>
//                     </tr>
//                   ))}

//                   <br />
//                   {userDetails.length > 0 && (

//                     <button className="btn btn-outline-info" onClick={downloadPDF}>
//                       Download PDF
//                     </button>
//                   )}
//                 </tbody>
//               </table>

//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   )

// };

// export default Mini;