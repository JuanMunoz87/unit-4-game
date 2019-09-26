$(document).ready(function() {

  let targetNumber = Math.floor(Math.random() * 101) + 19; 
  let crystals = $("#crystals"); 
  let counter = 0; 
  let wins = 0; 
  let loses = 0
  let crystal1 = Math.floor(Math.random() * 12) + 2; 
  let crystal2 = Math.floor(Math.random() * 12) + 2; 
  let crystal3 = Math.floor(Math.random() * 12) + 2; 
  let crystal4 = Math.floor(Math.random() * 12) + 2; 
  let numberOptions = [crystal1, crystal2, crystal3, crystal4];
  let crystalImages = ['./assets/images/bluecopy.jpg', './assets/images/greencopy.jpg', './assets/images/pinkcopy.jpg', './assets/images/yellowcopy.jpg'];

  $("#number").text(targetNumber); 
  $('#wins').text(wins);
  $('#losses').text(loses); 
  $('#score').text(counter); 
    
 
  for (let i = 0; i < numberOptions.length; i++) { 
    let imageCrystal = $("<img>"); 
    imageCrystal.addClass("crystal-image"); 
    imageCrystal.attr('src', crystalImages[i]); 
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    crystals.append(imageCrystal);
  }

  crystals.on("click", ".crystal-image", function() {
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    $('#score').text(counter);
    audioElement.play();

    if (counter === targetNumber) {
      wins++;
      alert('You win!');
      $('#wins').text(wins);
      console.log('wins: ' + wins);
      resetGame();
    }

    else if (counter >= targetNumber) {
      loses++;
      alert('You lose!');
      $('#losses').text(loses);
      resetGame();
    }

  });

    function resetGame() {
      targetNumber = Math.floor(Math.random() * 101) + 19;
      crystal1 = Math.floor(Math.random() * 12) + 2; 
      crystal2 = Math.floor(Math.random() * 12) + 2; 
      crystal3 = Math.floor(Math.random() * 12) + 2; 
      crystal4 = Math.floor(Math.random() * 12) + 2;
      numberOptions = [crystal1, crystal2, crystal3, crystal4];
      crystalImages = ['./assets/images/bluecopy.jpg', './assets/images/greencopy.jpg', './assets/images/pinkcopy.jpg', './assets/images/yellowcopy.jpg']; 
      counter = 0;
      crystals.empty();
      
      for (let i = 0; i < numberOptions.length; i++) { 
        let imageCrystal = $("<img>"); 
        imageCrystal.addClass("crystal-image"); 
        imageCrystal.attr('src', crystalImages[i]); 
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        crystals.append(imageCrystal);
      }

      $("#number").text(targetNumber);
      $('#score').text(counter);
      
    }
});