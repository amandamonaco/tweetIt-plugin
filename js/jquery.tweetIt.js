//JS from Twitter for the button
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));


//Set up Plugin
$.fn.tweetIt = function(options) {
	//Allow the user to pass options 
	var settings = $.extend({
		size: 'large',
		count: 'none',
		via: '',
		hashtags: '',
		url: null
	}, options);
	//(this) in our plug in referees to however many elements we select with a class of tweetButton
	//Use the .each method to loop over all the selected elements
	return this.each(function() {
		//For each element
		//Get the text
		var text = $(this).text();
		//Create a button and append the text
		var button = '<a class="twitter-share-button" href="https://twitter.com/intent/tweet "data-text="'+ text +'"data-count="'+settings.count+'"data-via="'+settings.via+'" data-hashtags="'+settings.hashtags+'" data-url="'+settings.url+'" data-size="'+settings.size+'"></a>';
		//Append the button to the selected element
	  	$(this).append(button);
	})
};

