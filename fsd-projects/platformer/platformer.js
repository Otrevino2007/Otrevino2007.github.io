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
    createPlatform(550, 640, 180, 10, "green");    // suelo principal
createPlatform(750, 520, 120, 10, "blue");     // plataforma media derecha
createPlatform(580, 380, 140, 10, "purple");   // plataforma media izquierda
createPlatform(720, 260, 60, 10, "orange");    // plataforma pequeña superior
createPlatform(780, 180, 50, 10, "pink");      // plataforma muy alta
createPlatform(710, 180, 15, 90, "brown");     // pared vertical izquierda
createPlatform(940, 160, 15, 100, "navy");     // pared vertical derecha
createPlatform(910, 280, 160, 10, "red");      // plataforma larga derecha
createPlatform(1120, 160, 15, 120, "grey");    // pared lateral derecha


    // TODO 3 - Create Collectables
   createCollectable("diamond", 600, 580, 0.4, 0.7); // caída media
   createCollectable("steve", 770, 460, 0.3, 0.8);   // caída lenta
   createCollectable("grace", 980, 120, 0.2, 0.9);   // caída desde altura

    // TODO 4 - Create Cannons
    createCannon("right", 360, 1300);  // dispara cada 1.3s
    createCannon("left", 630, 850);    // dispara cada 0.85s
    createCannon("right", 580, 950);   // dispara cada 0.95s
    //createCannon("top", 520, 2200);    // cañón superior
   // createCannon("top", 820, 2700);    // cañón superior lento
// Puedes activar los de arriba si quieres más dificultad
// createCannon("top", 500, 750)
// createCannon("top", 800, 1500)
    //createCannon("top", 500, 750)
    //createCannon("top",800,1500)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});