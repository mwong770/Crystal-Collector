
$(document).ready( function() {

	var goalValue = 0;
	var currentValue = 0;
	var wins = 0;
	var losses = 0;

	reset();

	// clears currentValue before each game and displays it on the browser
	// sets goalValue as a random number from 19 to 120, both inclusive, and displays it on the browser
	// sets a value for each crystal
	function reset() {
		currentValue = 0;
		$("#currentValue").text(currentValue);
		goalValue = Math.floor(Math.random() * ((120 - 19) +1) + 19);
		$("#goalValue").text(goalValue);
		var redCrystal = randomCrystalValue();
		$("#redCrystal").attr("value", redCrystal);
		var greenCrystal = randomCrystalValue();
		$("#greenCrystal").attr("value", greenCrystal);
		var blueCrystal = randomCrystalValue();
		$("#blueCrystal").attr("value", blueCrystal);
		var diamond = randomCrystalValue();
		$("#diamond").attr("value", diamond);
	}

	// creates an inclusive random number between 1 and 12 to be used for crystal values
	function randomCrystalValue() {
		return Math.floor((Math.random() * 12) + 1);
	}

	// plays sound to be used when crystal clicked or score implemented
	function sound(soundFile) {
		soundFile.loop = false;
        soundFile.play();
	}

	// compares currentValue to goalValue to determine wins/losses
	// increments and displays score and inserts sound per win/loss
	// resets game after each win/loss
	function comparison() {	
		var scoreSound = document.getElementById("scoreSound");
		if (currentValue == goalValue) {
			wins++;
			$("#wins").text(wins);
			sound(scoreSound);
			reset();
		}
			else if (currentValue > goalValue) {
				losses++;
				$("#losses").text(losses);
				sound(scoreSound);
				reset();
			}
	}

	// increments currentValue based on crystal clicked and displays sum on browser
	// adds sound per click on crystal
	// calls comparison function
	$(".crystal").on('click', function() {
		var clickSound = document.getElementById("clickSound");
		var crystalValue = parseInt($(this).attr("value"));
		currentValue += crystalValue;
		$("#currentValue").text(currentValue);
  		sound(clickSound);
		comparison();
	});

	// toggles instructions
  	$("#instructionsClicker").click(function() {
  		$("#instructionsSlide").slideToggle("slow");
  	});
 
});