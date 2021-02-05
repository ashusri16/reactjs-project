import React from 'react'
import LoginPageContainer from './LoginPageContainer'
import UserListContainer from './UserListContainer'
import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";


function RoutesContainer() {
    return (
        <div>
        <BrowserRouter>
        <Switch>
        <Route exact path="/login" component={LoginPageContainer} />
        <Route exact path="/users" component={UserListContainer} />
        <Redirect to="/login"/>
      </Switch>
        </BrowserRouter>
        </div>
    )
}

export default RoutesContainer;
