import Axios from "axios";
import React, { useState } from "react";

function FileUpload(props) {
	const [foto, setFoto] = useState("");
	console.log("isi state foto : ", foto);

	const onClikbtnUpload = (e) => {
		const formData = new FormData();
		formData.append("myImage", foto);
		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};
		Axios.post("/upload", formData, config)
			.then((response) => {
				alert("The file is successfully uploaded");
			})
			.catch((error) => {});
	};

	return (
		<div>
			<div className="container">
				<h1>ini upload file</h1>
				<div className="row col-md-8">
					<div className="col-md-8">
						<input className="form-control" type="file" onChange={(e) => setFoto(e.target.files[0])} placeholder="Username" name="name" />
					</div>
					<div className="col-md-8 py-2">
						<button onClick={() => onClikbtnUpload()} className=" form-control btn btn-primary col-md-8">
							Upload
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FileUpload;
