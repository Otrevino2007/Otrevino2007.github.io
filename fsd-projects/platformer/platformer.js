$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 700, 1500, 50, "green");     // suelo
createPlatform(200, 550, 200, 20, "blue");
createPlatform(500, 450, 200, 20, "purple");
createPlatform(800, 350, 200, 20, "orange");
createPlatform(1100, 250, 200, 20, "red");
createPlatform(400, 200, 150, 20, "pink");



    // TODO 3 - Create Collectables
   createCollectable("diamond", 250, 500, 0, 0);
   createCollectable("steve", 550, 400, 0, 0);
   createCollectable("grace", 850, 300, 0, 0);


    
    // TODO 4 - Create Cannons
    createCannon("left", 400, 2000);
    createCannon("right", 300, 1800);
    createCannon("top", 600, 2500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
