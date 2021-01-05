module.exports = {
	extends: ["@commitlint/config-conventional"],
	rules: {
		"type-case": [0, "always", "start-case"],
		"type-enum": [2, "always", ["fix", "chore", "feature", "improvement"]],
		"subject-case": [0, "always", "start-case"],
	},
};
