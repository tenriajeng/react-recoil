const { atom } = require("recoil");

const basketState = atom({
	key: "basket",
	default: 0,
});
export { basketState };
