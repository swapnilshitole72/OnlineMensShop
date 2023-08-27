import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import paymentsService from './payments.service';
import userService from '../Services/user.service';

const PaymentList = () => {
  const [payment, setPayment] = useState([]);
  // const [tempEmp, setTempemp] = useState([]);

  const init = () => {
    userService
      .getAllPayments()
      .then((response) => {
        // console.log('Printing payments data', response.data);
        setPayment(response.data);
        console.log(payment);
        // debugger
        // setTempemp(response.data);
        //  console.warn(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  debugger
  return (
    <center>
      <div className='container'>
        <h3 style={{ color: 'blue' }}>Payment Details</h3>

        <hr />
        <div>

          <table className='table table-bordered table-striped'>
            <thead className='thead-dark'>
              <tr>
                <th style={{ color: '#A52A2A' }} >ID</th>
                <th style={{ color: '#A52A2A' }} >Payment Date</th>
                <th style={{ color: '#A52A2A' }} >Name</th>
                <th style={{ color: '#A52A2A' }} >Payment Type</th>
                <th style={{ color: '#A52A2A' }} >Amount Paid</th>
              </tr>
            </thead>
            <tbody>
              {payment.map((payments) => (
                <tr key={payments.id}>
                  <td>###{payments.id}</td>
                  <td>{payments.paymentDate}</td>
                  <td>{payments.customer.firstName} {payments.customer.lastName}</td>
                  <td>{payments.paymentType}</td>
                  <td>{payments.amountPaid}.00 ₹</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>
    </center>
  );
};

export default PaymentList;
