'use strict';

var request = require('request');
var querystring = require('querystring');
var extend = require('xtend');

var API_URL = 'http://webservice.fanart.tv/v3';

var Fanarttv = function(apiKey) {
	this.creds = {
		api_key: apiKey
	};
};

module.exports = Fanarttv;

Fanarttv.prototype._get = function(url, parameters, callback) {
	parameters = extend(parameters, this.creds); // Add credentials to parameters
	var getURL = API_URL + '/' + url + '?' + querystring.stringify(parameters); // Construct URL with parameters

	request.get({
		url: getURL,
		json: true
	}, function(error, response, body) {
		if (!error && !!body.status && body.status !== 'OK') {
			error = new Error(body.description || body.error_message);
		}
		callback(error, body || {});
	});
};
 
/**
 * Get favart images bt movie ID
 * @param  {int}   id       Numeric tmdb_id or imdb_id of the movie. Example: 10195.
 * @param  {Function} callback
 */
Fanarttv.prototype.getImagesForMovie = function(id, callback) {

	this._get('movies/' + id, {}, function(error, body) {
		callback(error, body);
	});

};

/**
 * Get latest movies
 * @param  {Function} callback
 */
Fanarttv.prototype.latestMovies = function(callback) {

	this._get('movies/latest', {}, function(error, body) {
		callback(error, body);
	});

};

/**
 * Get favart images by TV show ID
 * @param  {int}   id       thetvdb id for the show. Example: 75682.
 * @param  {Function} callback
 */
Fanarttv.prototype.getImagesForTVShow = function(id, callback) {

	this._get('tv/' + id, {}, function(error, body) {
		callback(error, body);
	});

};

/**
 * Get latest tv show
 * @param  {Function} callback
 */
Fanarttv.prototype.latestTVShows = function(callback) {

	this._get('tv/latest', {}, function(error, body) {
		callback(error, body);
	});

};

/**
 * Get favart images for artist
 * @param  {string}   id       Musicbrainz id for the artist. Example: f4a31f0a-51dd-4fa7-986d-3095c40c5ed9.
 * @param  {Function} callback
 */
Fanarttv.prototype.getImagesForArtist = function(id, callback) {

	this._get('music/' + id, {}, function(error, body) {
		callback(error, body);
	});

};

/**
 * Get favart images for album
 * @param  {string}   id       Albums musicbrainz release-group id Example: 9ba659df-5814-32f6-b95f-02b738698e7c.
 * @param  {Function} callback
 */
Fanarttv.prototype.getImagesForArtist = function(id, callback) {

	this._get('music/albums/' + id, {}, function(error, body) {
		callback(error, body);
	});

};

/**
 * Get favart images for label
 * @param  {string}   id       Labels musicbrainz id Example: e832b688-546b-45e3-83e5-9f8db5dcde1d.
 * @param  {Function} callback
 */
Fanarttv.prototype.getImagesForLabel = function(id, callback) {

	this._get('music/albums/' + id, {}, function(error, body) {
		callback(error, body);
	});

};

/**
 * Get latest artists
 * @param  {Function} callback
 */
Fanarttv.prototype.getLatestArtists = function(callback) {

	this._get('music/latest', {}, function(error, body) {
		callback(error, body);
	});

};
