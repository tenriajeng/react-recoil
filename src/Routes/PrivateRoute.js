import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/Auth";

function PrivateRoute({ component: Component, ...rest }) {
	const isAuthenticated = useAuth();
	return (
		<div>
			<Route {...rest} render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
		</div>
	);
}

export default PrivateRoute;
