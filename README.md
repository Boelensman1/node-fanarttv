## Installation

```sh
$ npm install --save fanarttv
```

## Usage

```js
var fanarttvAPI = require('fanarttv');
var fanarttv = new fanarttvAPI('API_KEY');


fanarttv.getImagesForMovie(10195, function(err,res) {
	console.log(res);
});

fanarttv.latestMovies(function(err,res) {
	console.log(res);
});

fanarttv.getImagesForTVShow(75682, function(err,res) {
	console.log(res);
});

fanarttv.latestTVShows(function(err,res) {
	console.log(res);
});

fanarttv.getImagesForArtist('f4a31f0a-51dd-4fa7-986d-3095c40c5ed9', function(err,res) {
	console.log(res);
});

fanarttv.getImagesForAlbum('9ba659df-5814-32f6-b95f-02b738698e7c', function(err,res) {
	console.log(res);
});

fanarttv.getImagesForAlbum('9ba659df-5814-32f6-b95f-02b738698e7c', function(err,res) {
	console.log(res);
});

fanarttv.getImagesForLabel('e832b688-546b-45e3-83e5-9f8db5dcde1d', function(err,res) {
	console.log(res);
});

fanarttv.getLatestArtists(function(err,res) {
	console.log(res);
});

```
## License

MIT © [Dvir Hazout]()