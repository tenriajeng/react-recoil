import Axios from "axios";
import { atom, selector } from "recoil";

const authLogin = atom({
	key: "auth-login",
	default: null,
	// default: { email: "ilham@gmail.com", password: "ilham" },
});

const authUser = selector({
	key: "auth-user",
	get: async ({ get }) => {
		let user = null;
		const sendValue = get(authLogin);
		console.log("sending value : ", sendValue);
		try {
			let { data } = await Axios.post("http://localhost:6600/login", sendValue);
			user = { user: data.response[0] };
			console.log("ini data ku : ", user.user);
			if (user.user === undefined) {
				user = { user: "sign" };
			}
		} catch (error) {
			user = { user: error.status };
		}
		return user;
	},
});

export { authUser, authLogin };
