document.getElementById('show_tweet').addEventListener('click', function() {
  fetch('https://toshiyayui.github.io/MyTwRandom/Liked%20tweets.json')
    .then(response => response.json())
    .then(tweets => {
      const randomIndex = Math.floor(Math.random() * tweets.length);
      const randomTweet = tweets[randomIndex];
      var container = document.getElementById('tweet_container');
      container.innerHTML = ''; // remove previous tweet
      var blockquote = document.createElement('blockquote');
      blockquote.classList.add('twitter-tweet');
      blockquote.innerHTML = '<p><a href="' + randomTweet.Tweet_URL + '"></a></p>';
      container.appendChild(blockquote);
      twttr.widgets.load(container); // render the tweet
    })
    .catch(error => console.error('Error:', error));
});

function displayRandomTweet() {
  fetch('https://toshiyayui.github.io/MyTwRandom/Liked%20tweets.json')
    .then(response => response.json())
    .then(tweets => {
      const randomIndex = Math.floor(Math.random() * tweets.length);
      const randomTweet = tweets[randomIndex];
      var container = document.getElementById('tweet_container');
      container.innerHTML = ''; // remove previous tweet
      var blockquote = document.createElement('blockquote');
      blockquote.classList.add('twitter-tweet');
      blockquote.innerHTML = '<p><a href="' + randomTweet.Tweet_URL + '"></a></p>';
      container.appendChild(blockquote);
      twttr.widgets.load(container); // render the tweet
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('show_tweet').addEventListener('click', displayRandomTweet);

// Display a tweet when the page loads
displayRandomTweet();
