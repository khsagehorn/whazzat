


// this is the ajax request
function testText(text) {
  var baseURL = "http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment";
  var outputMode = "&outputMode=json&jsonp=myCallback";
  var textURI = "&text=" + encodeURI(text);
 
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": baseURL + apiKey + outputMode + textURI,
    "method": "GET",
    "dataType": 'jsonp'
}

  $.ajax(settings);

};

//functions to reset gauge values
function refreshGauge1(data){
  g1.refresh(data.docSentiment.score*100);

}

function refreshGauge2(data){
  g2.refresh(data.docSentiment.score*100);
}