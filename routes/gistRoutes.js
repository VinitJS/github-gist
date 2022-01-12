const express = require('express');
const router = express.Router();
const joiValidator = require('../midlewares/joiValidator');
const { validateBy } = require('../utils/constants');
const { getGistsByUsername, getGistById } = require('../controllers/gist/index.js');
const { getGistsByUsernameParams, getGistByIdParams } = require('../midlewares/validations/gist');

router.get('/user/:username', joiValidator(getGistsByUsernameParams, validateBy.PARAMS), getGistsByUsername);
router.get('/id/:gistId', joiValidator(getGistByIdParams, validateBy.PARAMS), getGistById);

module.exports = router;