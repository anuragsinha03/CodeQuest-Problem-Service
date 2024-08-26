const express = require("express");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const DBConnector = require("./config/db.config");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

//If any request comes and the route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
	return res.json({
		message: "WELCOME TO CODEQUEST, the Problem Service is alive",
	});
});

app.use(errorHandler);

app.listen(PORT, async () => {
	console.log(`Server up at PORT: ${PORT}`);
	await DBConnector.connect();
});
