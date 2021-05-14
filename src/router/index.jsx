import { Counter, Home } from "../pages";

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function BaseRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/counter">
					<Counter />
				</Route>
			</Switch>
		</Router>
	);
}
