import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ButtonPlus from "./view/ButtonPlus";
import FileUpload from "./view/FileUpload";
import Login from "./view/Login";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Suspense fallback={<h1>loading</h1>}>
					<Route exact path="/">
						<Navbar />
					</Route>
					<Route path="/login">
						<Navbar />
						<Login />
					</Route>
					<Route path="/upload-file">
						<Navbar />
						<FileUpload />
					</Route>
					<Route path="/button">
						<Navbar />
						<ButtonPlus />
					</Route>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}

export default App;
