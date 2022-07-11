import "./App.css";
import Login from "./screens/Login/login";
import Dashboard from "./screens/Dashboard/dashboard";
import AddEvents from "./screens/Events/AddEvents/AddEvents";
import Users from "./screens/Users/Users";
import EventWorkflow from "./screens/Events/Workflow/EventWorkflow";
import Approval from "./screens/Approval/Approval";
import Setting from "./screens/Setting/Setting";
import Transport from "./screens/Transport/TransportDashboard/Transport";
import UserProfile from "./screens/UserProfile/UserProfile";
import Profile from "./screens/Profile/Profile";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import Advert from "./screens/Advert/Advert";
import Notification from "./screens/Notification/Notification";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import SideBar from "./components/NavBar/navbar";
import AddMovie from "./screens/Movies/AddEvents/AddMovies";
import AddTicket from "./screens/Transport/AddTickets/AddTickets";
import CheckerForEvent from "./screens/Events/Checker/EventChecker";
import CheckerForMovie from "./screens/Movies/Checker/MovieChecker";
import CheckerForTransport from "./screens/Transport/Checker/TransportChecker";
import MovieWorkflow from "./screens/Movies/Workflow/MovieWorkflow";
import ResetPassword from "./screens/ResetPassword/ResetPassword";
import Requests from "./screens/Transport/Requests/Requests";
function App() {
    return (
        <Router >
            <Switch >
                < Route exact path="/login" component={Login} />
                <SideBar>
                    < Route exact path="/addevents" component={AddEvents} />
                    < Route exact path="/addmovie" component={AddMovie} />
                    < Route exact path="/addticket" component={AddTicket} />{" "}
                    < Route exact path="/advert" component={Advert} />{" "}
                    < Route exact path="/eventchecker" component={CheckerForEvent} />{" "}
                    < Route exact path="/moviechecker" component={CheckerForMovie} />{" "}
                    < Route exact path="/transportchecker" component={CheckerForTransport} />{" "}
                    < Route exact path="/approval" component={Approval} />{" "}
                    < Route exact path="/createaccount" component={CreateAccount} />{" "}
                    < Route exact path="/profile" component={Profile} />{" "}
                    < Route exact path="/setting" component={Setting} />{" "}
                    < Route exact path="/transport" component={Transport} />{" "}
                    < Route exact path="/userprofile" component={UserProfile} />{" "}
                    < Route exact path="/users" component={Users} />{" "}
                    < Route exact path="/eventworkflow" component={EventWorkflow} />{" "}
                    < Route exact path="/movieworkflow" component={MovieWorkflow} />{" "}
                    < Route exact path="/resetpass" component={ResetPassword} />{" "}
                    < Route exact path="/req" component={Requests} />{" "}
                    < Route exact path="/notif" component={Notification} />{" "}
                    < Route path="/dashboard" component={Dashboard} />{" "}
                </SideBar>{" "}
            </Switch>{" "}
        </Router>
    );
}
export default App;