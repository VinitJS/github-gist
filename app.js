const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const xss = require('xss-clean');
const helmet = require('helmet');

const gistRoutes = require('./routes/gistRoutes');
const ErrorResponse = require('./utils/errorResponse');

const app = express();

// Body parser, reading data from body into req.body
app.use(express.json({
  limit: '15kb'
}));

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Protect against HPP, should come before any routes
app.use(hpp());

// Restrict all routes to only 100 requests per IP address every 1o minutes
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100, // 100 requests per IP
  message: 'Too Many Request from this IP, please try again in an hour'
});
app.use(limiter);

// Routes
app.use('/api/v1/gist', gistRoutes);

// handle undefined Routes
app.use('*', (req, res, next) => {
  const err = new ErrorResponse(404, 'Not found!');
  next(err, req, res, next);
});

// Express automatically knows that this entire function is an error handling middleware by specifying 4 parameters
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
  });
});

module.exports = app;