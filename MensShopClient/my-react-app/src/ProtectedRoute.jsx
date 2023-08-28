import { Route } from 'react-router-dom';
import Login from './component/SignIn/login';
import NotFound from './NotFound';
import Profile1 from './component/Profile/Profile1';
function ProtectedRoute(props) {
    debugger
    var IsUserLoggedIn = window.sessionStorage.getItem("IsUserLoggedIn");

    var userRole = window.sessionStorage.getItem('userRole');
    debugger
    if (props.path == '/profile' || props.path == '/editProfile' || props.path=='/changePassword') {

        if (IsUserLoggedIn != null && IsUserLoggedIn != false &&
            IsUserLoggedIn != 'undefined' && IsUserLoggedIn == "true" && userRole == "ROLE_CUSTOMER") {
            return <Route exact path={props.path}
                component={props.component} />;
        }
        else if ((IsUserLoggedIn != null && IsUserLoggedIn != false &&
            IsUserLoggedIn != 'undefined' && IsUserLoggedIn == "true" && userRole == "ROLE_ADMIN")) {
            return <Route exact path={props.path}
            component={props.component} />;
        }

        else {
            return <Login></Login>
        }
    }
    else {
        if (IsUserLoggedIn != null && IsUserLoggedIn != false &&
            IsUserLoggedIn != 'undefined' && IsUserLoggedIn == "true" && userRole == "ROLE_CUSTOMER") {
            return <Route exact path={props.path}
                component={props.component} />;
        }
        else if ((IsUserLoggedIn != null && IsUserLoggedIn != false &&
            IsUserLoggedIn != 'undefined' && IsUserLoggedIn == "true" && userRole == "ROLE_ADMIN")) {
            return <NotFound></NotFound>
        }

        else {
            return <Login></Login>
        }
    }
}

export default ProtectedRoute