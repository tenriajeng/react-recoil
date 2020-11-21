import Axios from "axios";
import { atom, selector } from "recoil";

const kelasState = selector({
	key: "kelas-state",
	get: async () => {
		let kelas = null;
		// const sendValue = get(dataKelas);
		// if (sendValue !== null) {
		// console.log("sending value kelas state : ", sendValue);
		try {
			let { data } = await Axios.get("http://localhost:6600/admin/kelas/");
			kelas = { kelas: data.response };
			console.log("ini data ku : ", kelas.kelas);
			if (kelas.kelas === undefined) {
				kelas = { kelas: "sign" };
			}
		} catch (error) {
			kelas = { kelas: error.status };
		}
		return kelas;
		// }
		// return (kelas = { kelas: { name: "login dulu" } });
	},
});

export { kelasState };
