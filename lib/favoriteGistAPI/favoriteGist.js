const FavoriteGist = require("../../models/favoriteGist");

exports.favoriteByGistId = async (gistId) => {
  try {
    const response = await FavoriteGist.findOrCreate({
      where: {
        gistId
      },
      defaults: {
        gistId
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}

exports.unfavoriteByGistId = async (gistId) => {
  try {
    const response = await FavoriteGist.destroy({
      where: {
        gistId
      }
    });
    return response;
  } catch (error) {
    throw error;
  }
}

exports.findFavoriteGistIds = async () => {
  try {
    const response = await FavoriteGist.findAll({});
    return response;
  } catch (error) {
    throw error;
  }
}