import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import CustomerService from './Customer.service';

const CustomerList = () => {
  const [customers, setCustomer] = useState([]);
  // const [tempEmp, setTempemp] = useState([]);

  const init = () => {
    CustomerService
      .getAll()
      .then((response) => {
        console.log('Printing customer data', response.data);
        setCustomer(response.data);
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

  const handleDelete = (id) => {
    console.log('Printing id', id);
    CustomerService
      .remove(id)
      .then((response) => {
        console.log('customer deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  return (
    <div className='container'>
      <h3 style={{ color: 'blue' }}>List of Users</h3>

      <hr />
      <div>
       
        <table className='table table-bordered table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th style={{ color: '#A52A2A' }} >First Name</th>
              <th style={{ color: '#A52A2A' }} >Last Name</th>
              <th style={{ color: '#A52A2A' }} >Email</th>
              <th style={{ color: '#A52A2A' }} >Mobile</th>
             
              <th colSpan={3} style={{ color: '#A52A2A' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.email}</td>
                <td>{customer.mobile}</td>
                
                {/* <td>
                  <Link
                    className='btn btn-info'
                    to={`/customers/edit/${customer.id}`}
                  >
                    Update
                  </Link>
                </td> */}

                {/* <td>
                  <Link
                    className='btn btn-info'
                    to={`/uploadImage/${customer.id}`}
                  >
                    Image Upload
                  </Link>
                </td> */}
                <td>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      handleDelete(customer.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
