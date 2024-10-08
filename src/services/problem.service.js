const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
	constructor(problemRepository) {
		this.problemRepository = problemRepository;
	}

	async createProblem(problemData) {
		//1. Sanitize the markdown for description
		problemData.description = sanitizeMarkdownContent(
			problemData.description
		);

		const problem = await this.problemRepository.createProblem(problemData);

		return problem;
	}

	async getProblem(problemId) {
		const problem = await this.problemRepository.getProblem(problemId);
		return problem;
	}

	async getAllProblems() {
		const problems = await this.problemRepository.getAllProblems();
		return problems;
	}

	async deleteProblem(problemId) {
		const problem = await this.problemRepository.deleteProblem(problemId);
		return problem;
	}

	async updateProblem(problemId, updatePatch) {
		const problem = await this.problemRepository.updateProblem(
			problemId,
			updatePatch
		);
		return problem;
	}
}

module.exports = ProblemService;
