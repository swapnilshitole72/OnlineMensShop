import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function ProfilePage(props) {
  const {firstName,top}=props;
  const history=useHistory();
  

  const userRole = () => {
    const role=sessionStorage.getItem('userRole');

    if (role=='ROLE_CUSTOMER') {
      return true;
    } else if (role=='ROLE_ADMIN'){
      return false;
    }
  };

  const check=userRole();
//   useEffect(() => {
   
// }, [])


  const logoutUser = () => {
    sessionStorage.removeItem('userId');
    // sessionStorage.setItem('IsUserLoggedIn',false);
    sessionStorage.removeItem('IsUserLoggedIn');
    sessionStorage.removeItem('userName');
    // setShowLink(false);
    history.push('/login');
    // const newLocation = { ...location, pathname: '/' };
    // const newLocationString = `${newLocation.pathname}${newLocation.search}${newLocation.hash}`;
    // window.location.href = newLocationString;

}

  return (
    <div className="sideBar" style={{ position: 'fixed',marginTop:`${top}`, backgroundColor: '#0000', }}>
                 
                 
    <div className='justify-content-center' style={{ marginTop: '20px' ,textAlign:'center'}}>
    <h2>Hello..{sessionStorage.getItem('userName')}</h2>
    </div>


<div className="user-profile" style={{ marginTop: '20px' ,textAlign:'center' , marginRight: '15px'}}>

 <img src="/assets/mens.png" className="rounded-circle" width="150" height="150" />

</div>
<div style={{ marginTop: '25px' ,textAlign:'center'}}>
<h5><a class="dropdown-item" href="/profile">My Details</a></h5>
<br></br>
<h5><a class="dropdown-item" href="editProfile">Manage Account</a></h5>
<br></br>
<h5><a class="dropdown-item" href="changePassword">Change Password</a></h5>
<br></br>
{check?(
<h5><a class="dropdown-item" href="myorder">My Orders</a></h5>

):(
  <></>
)}
<br></br>
<h5><a class="dropdown-item" href='/' onClick={logoutUser}>Log Out</a></h5>  

</div>
<br></br>
</div>
  );
}

export default ProfilePage;
