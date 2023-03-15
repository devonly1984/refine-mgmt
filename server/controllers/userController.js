import User from "../mongodb/models/userModel.js";

const getAllUsers = async (req, res) => {
	try {
	} catch (error) {}
};
const createUser = async (req, res) => {
	try {
		const { name, email, avatar } = req.body;
		
		const userExists = await User.findOne({ email} );
		
		
		if (userExists) {
			return res.status(200).json(userExists);
		}
		const newUser = await User.create({
			name,
			email,
			avatar,
		});
		console.log(newUser);
		return res.status(200).json(newUser);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
const getUserInfoByID = async (req, res) => {};

export { getAllUsers, getUserInfoByID, createUser };
