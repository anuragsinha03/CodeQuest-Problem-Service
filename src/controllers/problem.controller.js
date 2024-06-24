function pingProblemController(req, res) {
	return res.json({
		message: "Problem Controller is running",
	});
}

function addProblem(req, res) {}

function getProblem(req, res) {}

function getProblems(req, res) {}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}

module.exports = {
	pingProblemController,
	addProblem,
	getProblem,
	getProblems,
	deleteProblem,
	updateProblem,
};
