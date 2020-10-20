import React from "react";
import { useRecoilState } from "recoil";
import { basketState } from "../Store/Basket";

function ButtonPlus(props) {
	const [plus, setPlus] = useRecoilState(basketState);
	if (plus <= 0) {
		setPlus(0);
	}
	console.log("plus : ", plus);
	return (
		<div className="container">
			<div className="row py-5">
				<button className="btn btn-primary" onClick={() => setPlus(plus + 1)}>
					Plus
				</button>
			</div>
			<div className="row">
				<button className="btn btn-primary" onClick={() => setPlus(plus - 1)}>
					Minus
				</button>
			</div>
		</div>
	);
}

export default ButtonPlus;
