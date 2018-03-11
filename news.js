'use strict';

const got = require('got');

const { url, apiKey } = require('./news-api');

module.exports.getNewsByCategory = getNewsByCategory;

function getNewsByCategory(category, country = 'ru') {
    let fullUrl = `${url}category=${category}&country=${country}&apiKey=${apiKey}`;

    return got(fullUrl, { json: true }, response => response);
}
