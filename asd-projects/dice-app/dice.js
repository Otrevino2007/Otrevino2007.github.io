$(document).ready(function () {

  function makeDot(top, left, elementID) {
    $("<div>")
      .css("height", "15px")
      .css("width", "15px")
      .css("background-color", "black")
      .css("border-radius", "50%")
      .css("position", "absolute")
      .css("top", top + "px")
      .css("left", left + "px")
      .appendTo(elementID);
  }

  function rollDie(dieID) {
    $(dieID).empty();

    var randomNum = Math.ceil(Math.random() * 6);

    if (randomNum === 1) {
      makeDot(40, 40, dieID);

    } else if (randomNum === 2) {
      makeDot(20, 20, dieID);
      makeDot(70, 70, dieID);

    } else if (randomNum === 3) {
      makeDot(20, 20, dieID);
      makeDot(70, 70, dieID);
      makeDot(40, 40, dieID);

    } else if (randomNum === 4) {
      makeDot(20, 20, dieID);
      makeDot(20, 70, dieID);
      makeDot(70, 20, dieID);
      makeDot(70, 70, dieID);

    } else if (randomNum === 5) {
      makeDot(20, 20, dieID);
      makeDot(20, 70, dieID);
      makeDot(70, 20, dieID);
      makeDot(70, 70, dieID);
      makeDot(40, 40, dieID);

    } else if (randomNum === 6) {
      makeDot(20, 20, dieID);
      makeDot(20, 70, dieID);
      makeDot(45, 20, dieID);
      makeDot(45, 70, dieID);
      makeDot(70, 20, dieID);
      makeDot(70, 70, dieID);
    }
  }

  $("#die").on("click", function () {
    rollDie("#die");
  });

});