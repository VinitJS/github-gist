const Joi = require("joi");

exports.favoriteByGistIdParams = Joi.object({
	gistId: Joi.string().hex().length(32).required()
});

exports.unfavoriteByGistIdParams = Joi.object({
	gistId: Joi.string().hex().length(32).required()
});