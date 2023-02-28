const favorite_gists = require("../../models/favoriteGist");

exports.favoriteByGistId = async (gist_id) => {
  try {
    return await favorite_gists.findOrCreate({
      where: {
        gist_id
      },
      defaults: {
        gist_id
      }
    });
  } catch (error) {
    throw error;
  }
}

exports.unfavoriteByGistId = async (gist_id) => {
  try {
    return await favorite_gists.destroy({
      where: {
        gist_id
      }
    });
  } catch (error) {
    throw error;
  }
}

exports.findFavoriteGistIds = async () => {
  try {
    return await favorite_gists.findAll({});
  } catch (error) {
    throw error;
  }
}