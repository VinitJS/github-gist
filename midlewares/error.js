const ErrorResponse = require("../utils/errorResponse");

const errorHander = (err, req, res, next) => {
	let error = { ...err };

	console.error("Error: ", error);
	error.message = err.message;

	// JWT Error
	if (err.name === "JsonWebTokenError") {
		error = new ErrorResponse(error.message, 403);
	}

	// JWT Error
	else if (err.name === "TokenExpiredError") {
		const message = err.message;
		error = new ErrorResponse(message, 403);
	}

	// JWT Error
	else if (err.name === "NotBeforeError") {
		const message = err.message;
		error = new ErrorResponse(message, 403);
	}

	// Joi Validation
	else if (err.isJoi === true) {
		const message = err.message;
		error = new ErrorResponse(message, 422);
	}

	// Mongoose Bad Object
	else if (err.name === "CastError") {
		const message = `Resource NOT found.`;
		error = new ErrorResponse(message, 404);
	}

	// Mongoose invalid request
	else if (err.code === 11000) {
		const message = `Duplicate field value entered: ${Object.keys(err.keyPattern)}.`;
		error = new ErrorResponse(message, 400);
	}

	// Mongoose invalid request
	else if (err.name === "ValidationError") {
		const message = Object.values(err.errors).map((val) => val.message);
		error = new ErrorResponse(message, 400);
	}

	res.status(error.statusCode || 500).json({ success: false, data: null, error: error.message || "Server Error" });
};

module.exports = errorHander;
