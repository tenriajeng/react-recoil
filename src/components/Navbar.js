import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authUser } from "../Store/Auth";
import { basketState } from "../Store/Basket";

function Navbar(props) {
	const { user } = useRecoilValue(authUser);
	const basket = useRecoilValue(basketState);
	// user = user[0];

	console.log("user autenticated : ", user);
	console.log("isi basket navbar : ", basket);

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Navbar
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link to="/login" className="nav-item nav-link">
								Login
							</Link>
							<Link to="/upload-file" className="nav-item nav-link">
								Upload File
							</Link>
							<Link to="/button" className="nav-item nav-link">
								Button Plus
							</Link>
							<Link to="/" className="nav-item nav-link">
								{user.name}
							</Link>
							<Link to="/" className="nav-item nav-link">
								Basket {basket}
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
