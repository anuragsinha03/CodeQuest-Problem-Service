const { default: mongoose } = require("mongoose");
const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models/index");
const InvalidResourceID = require("../errors/invalidresourceid.error");
// const logger = require("../config/logger.config");

class ProblemRepository {
	async createProblem(problemData) {
		try {
			const problem = await Problem.create({
				title: problemData.title,
				description: problemData.description,
				testCases: problemData.testCases ? problemData.testCases : {},
			});

			return problem;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getAllProblems() {
		try {
			const problems = await Problem.find({});
			return problems;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async getProblem(id) {
		try {
			if (!mongoose.Types.ObjectId.isValid(id)) {
				throw new InvalidResourceID("Problem", id);
			}
			const problem = await Problem.findById(id);
			if (!problem) {
				// logger.error(
				// 	`Problem.Repository: [getProblem] - Problem with ID: ${id} not found in the DB.`
				// );
				throw new NotFound("Problem", id);
			}
			return problem;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async deleteProblem(id) {
		try {
			if (!mongoose.Types.ObjectId.isValid(id)) {
				throw new InvalidResourceID("Problem", id);
			}
			const deletedProblem = await Problem.findByIdAndDelete(id);
			if (!deletedProblem) {
				// logger.error(
				// 	`Problem.Repository: [deleteProblem] - Problem with ID: ${id} not found in the DB.`
				// );
				throw new NotFound("Problem", id);
			}
			return deletedProblem;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}

	async updateProblem(id, updatePatch) {
		try {
			if (!mongoose.Types.ObjectId.isValid(id)) {
				throw new InvalidResourceID("Problem", id);
			}
			const updatedProblem = await Problem.findByIdAndUpdate(
				id,
				updatePatch,
				{
					new: true,
				}
			);

			if (!updatedProblem) {
				// logger.error(
				// 	`Problem.Repository: [updateProblem] - Problem with ID: ${id} not found in the DB.`
				// );
				throw new NotFound("Problem", id);
			}

			return updatedProblem;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
}

module.exports = ProblemRepository;
