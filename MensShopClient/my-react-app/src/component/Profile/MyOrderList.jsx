import { useState } from "react";
import userService from "../../Services/user.service";
import { useEffect } from "react";
import ProfilePage from "./ProfilePage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function MyOrder() {
  const history = useHistory();
  const [order, setOrder] = useState([]);
  const reviewHandler = (id) => {
    history.push('/productReview/'+id);
  };

  const init = () => {
    debugger
    userService
      .getOrderByCustId(sessionStorage.getItem('userId'))
      .then((response) => {
        // console.log('Printing customer data', response.data);
        setOrder(response.data);
        console.log(order);
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



  return (
    <>
      <ProfilePage></ProfilePage>
      <center>

        <div class="table-responsive container" style={{ marginTop: "-20px" }}>
          <h2 className='text-center'>My Orders</h2><br />

          <table class="table table-hover" style={{ marginTop: "0px", marginLeft: "200px" }}>
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {order.map((orders) => (
                <tr>
                  <td>###{orders.id}</td>
                  <td>{orders.orderDate}</td>
                  <td>Done</td>
                  <td>₹{orders.totalAmount}.00</td>
                  <td><button className="btn btn-info" onClick={()=>reviewHandler(orders.product.id)}>Add Review</button></td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default MyOrder;