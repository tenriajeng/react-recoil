import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../view/Login";

function Router(props) {
	return (
		<Switch>
			<Route exact path="/login">
				<Login />
			</Route>
		</Switch>
	);
}

export default Router;
