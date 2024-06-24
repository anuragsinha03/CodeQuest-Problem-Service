const { StatusCodes } = require("http-status-codes");

function pingProblemController(req, res) {
	return res.json({
		message: "Problem Controller is running",
	});
}

function addProblem(req, res) {
	return res.status(StatusCodes.NOT_IMPLEMENTED).json({
		message: "NOT IMPLEMENTED",
	});
}

function getProblem(req, res) {
	return res.status(StatusCodes.NOT_IMPLEMENTED).json({
		message: "NOT IMPLEMENTED",
	});
}

function getProblems(req, res) {
	return res.status(StatusCodes.NOT_IMPLEMENTED).json({
		message: "NOT IMPLEMENTED",
	});
}

function deleteProblem(req, res) {
	return res.status(StatusCodes.NOT_IMPLEMENTED).json({
		message: "NOT IMPLEMENTED",
	});
}

function updateProblem(req, res) {
	return res.status(StatusCodes.NOT_IMPLEMENTED).json({
		message: "NOT IMPLEMENTED",
	});
}

module.exports = {
	pingProblemController,
	addProblem,
	getProblem,
	getProblems,
	deleteProblem,
	updateProblem,
};
