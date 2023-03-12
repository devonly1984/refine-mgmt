import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
dotenv.config();

const app = express();
const PORT = 8080 || process.env.PORT;
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
	res.send({ message: "Hello world" });
});

const startServer = async () => {
	try {
		connectDB(process.env.MONGODB_URI);
		app.listen(PORT, () => {
			console.log(`App started on ${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};
startServer();
