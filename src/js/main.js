// declare global variables for gauges
var g1, g2;

// set default gauge vaules on page load
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

//functions to reset gauge values
function refreshGauge1(data){
  g1.refresh(data.docSentiment.score*100);

}

function refreshGauge2(data){
  g2.refresh(data.docSentiment.score*100);
}

 // get text from text boxes on click, and run the ajax request based on that data
 // with the returned jsonp callback, run the gague resfresh functions
$(document).on('ready', function() {

  $("#submit").on("click", function(event){
    event.preventDefault();
    var text = $("#text-input1").val();

    testText(text);

    window.myCallback = function (data) {

      refreshGauge1(data);

    }

  });

  $("#submit2").on("click", function(event){
    event.preventDefault();
    var text = $("#text-input2").val();

    testText(text);

    window.myCallback = function (data) {

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


$("#quotes").on("click", function(){
  $("#text-input1").val("It is time to bring our neighbors out of the shadows. It is time to give them legal status. It is time to create a reasonable path to citizenship.");
  $("#text-input2").val("They're going to have to go out. They can come back, but they're gonna have to go out.");
})

$("#reviews").on("click", function(){
  $("#text-input1").val("Best paired with my favorite Oreo variant!");
  $("#text-input2").val("Do you have any idea where this stuff comes from? It's excreted by squeezing the wobbly thingie on the UNDERSIDE OF A COW! That's hardly made clear anywhere on the label.");
})

$("#tweets").on("click", function(){
  $("#text-input1").val("Bro first of all you stole your whole shit from Cudi");
  $("#text-input2").val("I went to look at your twitter and you were wearing cool pants");
})




