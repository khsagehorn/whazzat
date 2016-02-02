// add scripts
var g1, g2;

window.onload = function(){
  g1 = new JustGage({
    id: "g1",
    value: 0,
    min: -100,
    relativeGaugeSize: true,
    max: 100,
    clicked: false,
 
    label: "MEAN  or  NICE"
  });

  g2 = new JustGage({
    id: "g2",
    value: 0,
    min: -100,
    relativeGaugeSize: true,
    max: 100,
    clicked: false,
 
    label: "MEAN or NICE"
  });     
};

// window.myCallback = function (data) {
//   console.log('your response:', data);

//   refreshGauge1(data);
    
//   refreshGauge2(data);
    
//   console.log(data.docSentiment.score);

// }

function refreshGauge1(data){
  g1.refresh(data.docSentiment.score*100);

}

function refreshGauge2(data){
  g2.refresh(data.docSentiment.score*100);
}

 // get text from text boxes on click, and run the ajax request
$(document).on('ready', function() {

  $("#submit").on("click", function(event){
    event.preventDefault();
    var text = $("#text-input1").val();

    testText(text);

    window.myCallback = function (data) {
      console.log('your response:', data);

      refreshGauge1(data);
    }

  });

  $("#submit2").on("click", function(event){
    event.preventDefault();
    var text = $("#text-input2").val();

    testText(text);

    window.myCallback = function (data) {
      console.log('your response:', data);

      refreshGauge2(data);
    }

  });
});


// this is the ajax request
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



