import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../context/auth/authContext'

const PrivateRoute = ({ component: Component, ...rest}) => {
 
    const { isAuthenticated } = useContext(AuthContext)
 
    return (
        <Route { ...rest } render={props => !isAuthenticated ? <Redirect to='/' /> : <Component {...props} />} />
    )  //A Route that will render the passed in component if authenticated or redirect is not
}

export default PrivateRoute
