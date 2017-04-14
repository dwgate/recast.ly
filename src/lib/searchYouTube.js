var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    videoEmbeddable: true,

    data: {
      type: 'video',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet'
    },

    success: function(data) {
      console.log('found some results!');
      console.log(data);
      callback(data);
      return data.items;
    },

    error: function(error) {
      console.log('failure');
      console.log(error);
      console.log(error.responseJSON.error.message);
    }

  });

};

window.searchYouTube = searchYouTube;
