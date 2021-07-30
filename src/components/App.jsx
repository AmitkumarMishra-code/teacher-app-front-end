import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Admin from "./Admin"
import Home from "./Home"
import SignUp from "./Signup"
export default function App(){
    return(
        <Router>
            <Switch>
                <Route exact path = '/'>
                    <Home/>
                </Route>
                <Route exact path = '/newUser'>
                    <SignUp/>
                </Route>
                <Route exact path = '/admin'>
                    <Admin/>
                </Route>
            </Switch>
        </Router>
    )
}