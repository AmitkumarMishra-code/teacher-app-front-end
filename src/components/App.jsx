import { Box, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { registerClick } from "../apiCalls/serverCalls"
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
                <Route path = '/:id' component = {AffiliateLink}/>
            </Switch>
        </Router>
    )
}

export function AffiliateLink(props){
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const redirectUser = async() => {
        try {
            await registerClick(props.match.params.id)
            setIsLoading(false)
            window.location.replace('https://www.google.com')
        }
        catch (error) {
            setErrorMessage(error.message)
            setIsLoading(false)
        }
    }
    useEffect(() => {
        redirectUser()
        // eslint-disable-next-line
    },[])
    return(
        <Box>
            {
                isLoading && !errorMessage ?  <Text>Redirecting....</Text> : <Text>{errorMessage}</Text>
            }
        </Box>
    )
}