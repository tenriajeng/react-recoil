import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authLogin } from "../Store/Auth";

function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [data, setData] = useRecoilState(authLogin);
	console.log("data login : ", data);

	const onClickBtn = (e) => {
		setData({
			email,
			password,
		});
	};

	const styleRow = { marginTop: 55 };

	return (
		<div className="container" style={styleRow}>
			<div className="jumbotron">
				<h1>ini login</h1>
				<div className="row col-lg-8">
					<div className="col-lg-8">
						<input className="col-lg-8" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Username" name="name" />
					</div>
					<div className="col-lg-8 py-2">
						<input className="col-lg-8" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" name="password" />
					</div>
					<div className="col-lg-8 py-2">
						<button onClick={() => onClickBtn()} className="btn btn-primary col-lg-8">
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
