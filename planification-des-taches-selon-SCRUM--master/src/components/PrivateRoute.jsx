import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectisauth, selectautheduser , selectusers } from '../features/users/usersSlice';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    // const { isAuthenticated, user} = useContext(AuthContext);
    const isauth = useSelector(selectisauth)
   // const user = useSelector(selectautheduser)
   const user = useSelector(selectusers)

    return (
        
        <Route {...rest} render={props => {
            if (!isauth)
                return <Redirect to={{
                    pathname: '/Auth',
                    state: { from: props.location }
                }} />

            if (!user ||  !roles.includes(user.roll))
                return <Redirect to={{
                    pathname: '/Home',
                    state: { from: props.location }
                }} />
            return <Component {...props} />
        }} />
    )
}

export default PrivateRoute;