const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/notimplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("./../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
	return res.json({
		message: "Problem Controller is running",
	});
}

async function addProblem(req, res, next) {
	try {
		console.log("Incoming req body: ", req.body);
		const newProblem = await problemService.createProblem(req.body);
		return res.status(StatusCodes.CREATED).json({
			success: true,
			message: "Successfully created a new problem",
			error: {},
			data: newProblem,
		});
	} catch (error) {
		next(error);
	}
}

async function getProblem(req, res, next) {
	try {
		const id = req.params.id;
		const problem = await problemService.getProblem(id);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: `Successfully fetched the problem with ID: ${id}`,
			error: {},
			data: problem,
		});
	} catch (error) {
		next(error);
	}
}

async function getProblems(req, res, next) {
	try {
		const problems = await problemService.getAllProblems();
		return res.status(StatusCodes.OK).json({
			success: true,
			message: "Successfully fetched all the problems",
			error: {},
			length: problems.length,
			data: problems,
		});
	} catch (error) {
		next(error);
	}
}

async function deleteProblem(req, res, next) {
	try {
		const id = req.params.id;
		const deletedProblem = await problemService.deleteProblem(id);
		return res.status(StatusCodes.OK).json({
			success: true,
			meesage: `Successfully deleted the problem with ID ${id}`,
			error: {},
			data: deletedProblem,
		});
	} catch (error) {
		next(error);
	}
}

async function updateProblem(req, res, next) {
	try {
		const id = req.params.id;
		const updatedProblem = await problemService.updateProblem(id, req.body);
		return res.status(StatusCodes.OK).json({
			success: true,
			message: `Successfully updated the problem with ID ${id}`,
			error: {},
			data: updatedProblem,
		});
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
