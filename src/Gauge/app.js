var g1;

      window.onload = function(){
        var g1 = new JustGage({
          id: "g1",
          value: getRandomInt(0, 100),
          min: 0,
          relativeGaugeSize: true,
          max: 100,
 
          label: "Negativity"
        });

        var g2 = new JustGage({
          id: "g2",
          value: getRandomInt(0, 100),
          min: 0,
          relativeGaugeSize: true,
          max: 100,
 
          label: "Negativity"
        });
        setInterval(function() {
          g1.refresh(getRandomInt(0, 100)); g2.refresh(getRandomInt(0, 100));
        }, 2500);
      };