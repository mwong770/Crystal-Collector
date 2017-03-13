
$(document).ready( function() {

	var goalValue = 0;
	var currentValue = 0;
	var diamond = '';
	var redCrystal = '';
	var blueCrystal = '';
	var greenCrystal = '';
	var wins = 0;
	var losses = 0;
	var scoreSound = document.getElementById("scoreSound");
	var clickSound = document.getElementById("clickSound");

	reset();

	//clears currentValue before each game and displays it on the browser
	//sets goalValue as a random number from 19 to 120, both inclusive, and displays it on the browser
	//sets a value for each crystal
	function reset() {
		currentValue = 0;
		$("#currentValue").text(currentValue);
		goalValue = Math.floor(Math.random() * ((120 - 19) +1) + 19);
		$("#goalValue").text(goalValue);
		redCrystal = randomCrystalValue();
		greenCrystal = randomCrystalValue();
		blueCrystal = randomCrystalValue();
		diamond = randomCrystalValue();
	}

	//creates an inclusive random number between 1 and 12 to be used for crystal values
	function randomCrystalValue() {
		return Math.floor((Math.random() * 12) + 1);
	}

	//compares currentValue to goalValue to determine wins/losses
	//increments and displays score and inserts sound per win/loss
	//resets game after each win/loss
	function comparison() {	
		if (currentValue == goalValue) {
			wins++;
			$("#wins").text(wins);
    		scoreSound.loop = false;
        	scoreSound.play();
			reset();
		}

			else if (currentValue > goalValue) {
				losses++;
				$("#losses").text(losses);
				scoreSound.loop = false;
        		scoreSound.play();
				reset();
			}
	}

	//increments currentValue based on crystal clicked and displays sum on browser
	//adds sound per click on crystal
	//calls comparison function
	$("#redCrystal").on('click', function() {
		currentValue += redCrystal;
		$("#currentValue").text(currentValue);
		clickSound.loop = false;
        clickSound.play();
		comparison();
	});

	$("#greenCrystal").on('click', function() {
		currentValue += greenCrystal;
		$("#currentValue").text(currentValue);
		clickSound.loop = false;
        clickSound.play();
		comparison();	
	});

	$("#blueCrystal").on('click', function() {
		currentValue += blueCrystal;
		$("#currentValue").text(currentValue);
		clickSound.loop = false;
        clickSound.play();
		comparison();	
	});

	$("#diamond").on('click', function() {
		currentValue += diamond;
		$("#currentValue").text(currentValue);
		clickSound.loop = false;
        clickSound.play();
		comparison();
	});

	//toggles instructions
  	$("#instructionsClicker").click(function() {
  			$("#instructionsSlide").slideToggle("slow");
  	});
 
});