// add scripts

$(document).on('ready', function() {

  $("#submit").on("click", function(event){
    event.preventDefault();
    var text = $("#text-input").val();
    getWeather(location);
  });
});

function getWeather(location) {
  var baseURL = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiKey = "&appid=11b4e2aa51067d3162de79fbcd05ee80";
  $.ajax({
    url: baseURL + location + apiKey,
    success: function(json) {



    }
  });
}
