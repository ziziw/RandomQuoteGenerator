$("document").ready(function(){
  getQuote();
  var randomQuote;
	var author;

  function getQuote(){
    var url="https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback";
    $.getJSON({url, cache: false}).then(function(data){
      randomQuote = data[0].content.replace(/(<p[^>]+?>|<p>|<\/p>)/img, "");
      author = data[0].title;
      $("#quote").html('"'+randomQuote+'"');
			$("#author").html("-"+author);
    });
    
  };
  
  
  $("#new").on("click", function(){
		getQuote();
	});

	$("#tweet").on("click", function(){
		window.open("https://twitter.com/intent/tweet?text="+randomQuote+" -"+author);
	});
});