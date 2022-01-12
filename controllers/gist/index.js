const { findFavoriteGistIds } = require("../../lib/favoriteGistAPI/favoriteGist");
const { getGistsByUsername, getGistById, getGistByIds } = require("../../lib/githubGistAPI/githubGistAPI");
const asyncHandler = require("../../midlewares/asyncHandler");

exports.getGistsByUsername = asyncHandler(async (req, res, next) => {
	const { username } = req.params;
	const gists = await getGistsByUsername(username);
	res.status(200).json({ success: true, data: { username, gists }, error: null });
});

exports.getGistById = asyncHandler(async (req, res, next) => {
	const { gistId } = req.params;
	console.log(gistId)
	const gist = await getGistById(gistId);
	res.status(200).json({ success: true, data: { gistId, gist }, error: null });
});

exports.getGistsByFavorites = asyncHandler(async (req, res, next) => {
	const favorites = await findFavoriteGistIds();

	const favoriteGists = await getGistByIds(favorites.map(fav => fav.gistId));

	res.status(200).json({ success: true, data: { favoriteGists }, error: null });
});