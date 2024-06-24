const express = require("express");
const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

//If any request comes and the route starts with /api, we map it to apiRouter
app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
	return res.json({
		message: "Problem Service is alive",
	});
});

app.listen(PORT, () => {
	console.log(`Server up at PORT: ${PORT}`);
});
