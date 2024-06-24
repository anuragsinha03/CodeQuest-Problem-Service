const NotImplemented = require("../errors/notimplemented.error");

function pingProblemController(req, res) {
	return res.json({
		message: "Problem Controller is running",
	});
}

function addProblem(req, res, next) {
	try {
		throw new NotImplemented("addProblem");
	} catch (error) {
		next(error);
	}
}

function getProblem(req, res, next) {
	try {
		throw new NotImplemented("getProblem");
	} catch (error) {
		next(error);
	}
}

function getProblems(req, res, next) {
	try {
		throw new NotImplemented("getProblems");
	} catch (error) {
		next(error);
	}
}

function deleteProblem(req, res, next) {
	try {
		throw new NotImplemented("deleteProblem");
	} catch (error) {
		next(error);
	}
}

function updateProblem(req, res, next) {
	try {
		throw new NotImplemented("updateProblem");
	} catch (error) {
		next(error);
	}
}

module.exports = {
	pingProblemController,
	addProblem,
	getProblem,
	getProblems,
	deleteProblem,
	updateProblem,
};
