import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});
// send a GET request to the search endpoint
// a callback function is invoked with the videos array that is returned from hitting the endpoint
// an q string to search for
var searchYouTube = (query, callback) => {

  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    data: {
      key: YOUTUBE_API_KEY,
      q: query,
      part: 'snippet',
      maxResults: 5,
      type: 'video',
    },
    contentType: 'application/json',
    success: function(data) {
      data = data.slice(0, 5);
      callback(data);
    },
    error: function(response) {
      console.log('Search Failed');
    }
  });
};

export default searchYouTube;
