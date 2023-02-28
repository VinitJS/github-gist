const { default: axios } = require("axios");

const githubGistAPIBase = 'https://api.github.com';

exports.getGistsByUsername = async (username, since, perPage, page) => {
  try {
    let url = `${githubGistAPIBase}/users/${username}/gists?`;
    const options = [];
    if(since) options.push(`since=${since}`);
    if(perPage) options.push(`per_page=${perPage}`);
    if(page) options.push(`page=${page}`);
    url = url + options.join('&');
    
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