const express = require('express');
const router = express.Router();
const joiValidator = require('../midlewares/joiValidator');
const { validateBy } = require('../utils/constants');
const { getGistsByUsername, getGistById, getGistsByFavorites } = require('../controllers/gist/index.js');
const { getGistsByUsernameParams, getGistByIdParams } = require('../midlewares/validations/gist');
const { favoriteByGistIdParams, unfavoriteByGistIdParams } = require('../midlewares/validations/favorite');
const { favoriteByGistId, unfavoriteByGistId } = require('../controllers/favorite');

router.get('/user/:username', joiValidator(getGistsByUsernameParams, validateBy.PARAMS), getGistsByUsername);
router.get('/id/:gistId', joiValidator(getGistByIdParams, validateBy.PARAMS), getGistById);
router.put('/favorite/do/:gistId', joiValidator(favoriteByGistIdParams, validateBy.PARAMS), favoriteByGistId);
router.put('/favorite/undo/:gistId', joiValidator(unfavoriteByGistIdParams, validateBy.PARAMS), unfavoriteByGistId);
router.get('/favorite', getGistsByFavorites);

module.exports = router;