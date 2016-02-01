// add scripts

$(document).on('ready', function() {

  $("#submit").on("click", function(event){
    event.preventDefault();
    var text = $("#text-input").val();
    testText(text);
  });
});

function testText(text) {
 
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.aylien.com/api/v1/sentiment?mode=tweet&text=Look%20at%20this%20shit.%20Look%20at%20it.",
    "method": "GET",
    "headers": {
      "x-aylien-textapi-application-key": "ad58061c07dc1f78e7627809a9482ca8",
      "x-aylien-textapi-application-id": "f725efbf",
      "cache-control": "no-cache",
      // "postman-token": "5a447de6-15a9-a741-a9e3-3f8d0b53a126"
    }
  }

$.ajax(settings).done(function (response) {
  console.log(response);
  });
};

