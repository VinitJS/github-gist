const asyncHandler = require("./asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const { validateBy } = require("../utils/constants");

const joiValidator = (schema, property) =>
	asyncHandler(async (req, res, next) => {
		let error, message;
		switch (property) {
			case validateBy.BODY:
				error = schema.validate(req.body).error;
				break;
			case validateBy.QUERY:
				error = schema.validate(req.query).error;
				break;
			case validateBy.PARAMS:
				error = schema.validate(req.params).error;
				break;
			default:
				error = true;
		}

		if (error) {
			console.error(error);
			return next(new ErrorResponse(error, 422));
		}
		next();
	});

module.exports = joiValidator;
