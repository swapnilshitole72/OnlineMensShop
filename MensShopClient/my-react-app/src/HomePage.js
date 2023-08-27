import {Route} from 'react-router-dom';
import Login from './component/SignIn/login';
import Dashboard from './Admin/Dashboard';
import Home from './component/Home';
function HomePageRoute(props)
{
    debugger
    var IsUserLoggedIn = window.sessionStorage.getItem("IsUserLoggedIn");

    var userRole = window.sessionStorage.getItem('userRole');
 
    if(IsUserLoggedIn != null && IsUserLoggedIn != false &&
        IsUserLoggedIn!='undefined' && IsUserLoggedIn=="true" && userRole=="ROLE_CUSTOMER")
    {
        return <Route exact path={props.path} 
        component={Home}/>;
    }
    else if((IsUserLoggedIn != null && IsUserLoggedIn != false &&
        IsUserLoggedIn!='undefined' && IsUserLoggedIn=="true" && userRole=="ROLE_ADMIN"))
    {
        return <Route exact path={props.path} 
        component={Dashboard}/>;
    }

    else
    {
        return <Route exact path={props.path} 
        component={Home}/>;
    }
}

export default HomePageRoute;