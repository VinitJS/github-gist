const Joi = require("joi");

exports.getGistsByUsernameParams = Joi.object({
	username: Joi.string().max(100).required()
});

exports.getGistByIdParams = Joi.object({
	gistId: Joi.string().hex().length(32).required()
});