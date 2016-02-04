
// show modal on page load
$(window).load(function(){
  $('#myModal').modal('show');
});



// set default gauge vaules on page load
window.onload = function(){


  g1 = new JustGage({
    id: "g1",
    value: 0,
    min: -100,
    relativeGaugeSize: true,
    max: 100,
 
    label: "MEAN  or  NICE"
  });

  g2 = new JustGage({
    id: "g2",
    value: 0,
    min: -100,
    relativeGaugeSize: true,
    max: 100,
 
    label: "MEAN or NICE"
  });

};


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


// populate text boxes with exaple text
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

$("#comments").on("click", function(){
  $("#text-input1").val("If it takes a leftist to right the ship, so be it. The current state of affairs is untenable. This lifelong Republican will vote for Sanders if he wins his party's nomination. I will be part of the effort for serious, rational, comprehesive change. May we be fortunate enough to see this come to pass. ");
  $("#text-input2").val("In name of all of us from the Old World, I would like to thank the author of this recipe for adding the amounts in grams. All hail universally understandable measurements!");
})






