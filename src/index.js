import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { RecoilRoot } from "recoil";

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
				integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
				crossorigin="anonymous"
			/>
			<App />
			<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
			<script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>
			<script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
