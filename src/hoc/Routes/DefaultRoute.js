import React from 'react'
import {Redirect, Route} from 'react-router-dom'

import DefaultLayout from '../DefaultLayout'
import Auth from "../../utils/Auth/Auth";

const DefaultRoute = ({ component: Component, ...rest }) => {
    if (!Auth.isLoggedIn) {
        return (<Redirect to={"/signin"}/>);
    }

    return (
        <Route {...rest} render={props => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )} />
    )
}

export default DefaultRoute;
