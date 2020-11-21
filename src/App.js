import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarReact from "./components/NavbarReact";
import { AuthContext } from "./context/Auth";
import PrivateRoute from "./Routes/PrivateRoute";
import ButtonPlus from "./view/ButtonPlus";
import FileUpload from "./view/FileUpload";
import Home from "./view/Home";
import HomeReact from "./view/HomeReact";
import Login from "./view/Login";
import WysiwygForm from "./view/WysiwygForm";
import "./App.css";

function App() {
	return (
		<div>
			<AuthContext.Provider value={false}>
				<BrowserRouter>
					<Suspense fallback={<h1>loading</h1>}>
						<Route exact path="/">
							<NavbarReact />
							<HomeReact />
						</Route>
						<Route exact path="/login">
							<NavbarReact />
							<Login />
						</Route>
						<Route path="/login/1">
							<NavbarReact />
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
						<Route path="/wysiwyg">
							<Navbar />
							<WysiwygForm />
						</Route>
						<PrivateRoute path="/admin" component={HomeReact} />
					</Suspense>
				</BrowserRouter>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
