const { default: axios } = require("axios");

const githubGistAPIBase = 'https://api.github.com';

exports.getGistsByUsername = async (username, since, perPage, page) => {
  try {
    const url = `${githubGistAPIBase}/users/${username}/gists?`;
    if(since) url = url + `since=${since}&`;
    if(perPage) url = url + `per_page=${perPage}&`;
    if(page) url = url + `page=${page}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

exports.getGistById = async (gistId) => {
  try {
    const url = `${githubGistAPIBase}/gists/${gistId}?`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

exports.getGistByIds = async (gistIds) => {
  try {
    const result = [];
    for(let i=0; i<gistIds.length; i++) {
      result.push(await this.getGistById(gistIds[i]));
    }
    return result;
  } catch (error) {
    throw error;
  }
}