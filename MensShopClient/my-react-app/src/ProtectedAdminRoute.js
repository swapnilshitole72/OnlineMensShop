import {Route} from 'react-router-dom';
import Login from './component/SignIn/login';
import ForbiddenPage from './ForbiddenPage';
function ProtectedAdminRoute(props)
{
    debugger
    var IsUserLoggedIn = window.sessionStorage.getItem("IsUserLoggedIn");

    var userRole = window.sessionStorage.getItem('userRole');
 
    if(IsUserLoggedIn != null && IsUserLoggedIn != false &&
        IsUserLoggedIn!='undefined' && IsUserLoggedIn=="true" && userRole=="ROLE_CUSTOMER")
    {
        return <ForbiddenPage></ForbiddenPage>
    }
    else if((IsUserLoggedIn != null && IsUserLoggedIn != false &&
        IsUserLoggedIn!='undefined' && IsUserLoggedIn=="true" && userRole=="ROLE_ADMIN"))
    {
        return <Route exact path={props.path} 
        component={props.component}/>;
    }

    else
    {
        return <Login></Login>
    }
}

export default ProtectedAdminRoute;