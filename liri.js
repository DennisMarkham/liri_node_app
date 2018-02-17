
require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var request = require("request");
var Spotify = require("node-spotify-api");
var Twitter = require('twitter');

//create spotify object (but this is how it looks in the links!!!)
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);


var a = process.argv[2];
var b = process.argv[3];

if (a === "my-tweets")
{
//show last 20 tweets

var params = {screen_name: 'DennisJIRI'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {

    for (i = 0; i < 20; i++){
      console.log(tweets[i].text);
      if (i === (tweets.length -1))
      {
        break;
      }
  }
  }
});

}

if (a === "spotify-this-song")
{
// Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from

//NOTE YOU ARE NOT SEARCHING
if (b === "")
{
	b = "The Sign";
}
spotify
  .search({ type: 'track', query: b })
  .then(function(response) {
    console.log(response);
    console.log(response.name);
    console.log(response.artists);
    console.log(response.preview_url);
    console.log(response.album);
  })
  .catch(function(err) {
    console.log(err);
  });

// var spotQueryURL = "https://api.spotify.com/v1/search?query=tania+bowra&offset=0&limit=20&type=track";

//        $.ajax({
//       url: spotQueryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response.name);
//       console.log(response.artists);
//       console.log(response.preview_url);
//       console.log(response.album);
//     });

}

if (a === "movie-this")
{

  // * Title of the movie.
  // * Year the movie came out.
  // * IMDB Rating of the movie.
  // * Rotten Tomatoes Rating of the movie.
  // * Country where the movie was produced.
  // * Language of the movie.
  // * Plot of the movie.
  // * Actors in the movie.
	
	if (b === "") 
	{
		b = "Mr. Nobody";
	}

   var movieQueryURL = "https://www.omdbapi.com/?t=" + b + "&y=&plot=short&apikey=trilogy";



   request(movieQueryURL, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(reponse.Title);
   console.log(response.Released);
   console.log(response.Ratings[0]);
   console.log(response.Ratings[1]);
   console.log(response.Country);
   console.log(response.Language);
   console.log(response.Plot);
   console.log(response.Actors);
});

   

    //    $.ajax({
    //   url: movieQueryURL,
    //   method: "GET"
    // }).then(function(response) {
    //   console.log(response.Title);
    //   console.log(response.Released);
    //   console.log(response.Ratings[0]);
    //   console.log(response.Ratings[1]);
    //   console.log(response.Country);
    //   console.log(response.Language);
    //   console.log(response.Plot);
    //   console.log(response.Actors);
    // });

}

if (a === "do-what-it-says")
{
//   Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
var textCommand = fs.readFile("random.txt");
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
a = textCommand;
// Feel free to change the text in that document to test out the feature for other commands.
	
}
