// add scripts

window.myCallback = function (data) {
  console.log('your response:', data);

  $("#value").html(data.docSentiment.score);


}

$(document).on('ready', function() {

  $("#submit").on("click", function(event){
    event.preventDefault();
    var text = $("#text-input1").val();

    testText(text);
  });
});

function testText(text) {
  var baseURL = "http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment";
  var apiKey = "?apikey=abedd417c29793469d729bb648c5f7bcd56e583f";
  var outputMode = "&outputMode=json&jsonp=myCallback";
  var textURI = "&text=" + encodeURI(text);
 
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": baseURL + apiKey + outputMode + textURI,
    // "url": "http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment?apikey=abedd417c29793469d729bb648c5f7bcd56e583f&outputMode=json&jsonp=myCallback&text=This%2520was%2520a%2520terrible%2520idea%252C%2520you%2520know.",
    "method": "GET",
    "dataType": 'jsonp'
}

  $.ajax(settings);

};



