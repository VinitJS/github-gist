const { favoriteByGistId, unfavoriteByGistId } = require("../../lib/favoriteGistAPI/favoriteGist");
const asyncHandler = require("../../midlewares/asyncHandler");
const ErrorResponse = require("../../utils/errorResponse");

exports.favoriteByGistId = asyncHandler(async (req, res, next) => {
  const { gistId } = req.params;

  await favoriteByGistId(gistId);

	res.status(200).json({ success: true, data: {  }, error: null });
});

exports.unfavoriteByGistId = asyncHandler(async (req, res, next) => {
  const { gistId } = req.params;

  await unfavoriteByGistId(gistId);

	res.status(200).json({ success: true, data: { }, error: null });
});