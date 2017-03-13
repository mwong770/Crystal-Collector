
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

	function reload() {
		wins = 0;
		losses = 0;
		reset();
	}

	//goalValue a random number from 19 to 120, both inclusive
	function reset() {
		currentValue = 0;
		$("#currentValue").text(currentValue);
		goalValue = Math.floor(Math.random() * ((120 - 19) +1) + 19);
		$("#goalValue").html(goalValue);
		console.log("goal " + goalValue);
		redCrystal = randomCrystalValue();
		console.log("red " + redCrystal);
		greenCrystal = randomCrystalValue();
		console.log("green " + greenCrystal);
		blueCrystal = randomCrystalValue();
		console.log("blue " + blueCrystal);
		diamond = randomCrystalValue();
		console.log("diamond " + diamond);
	}

	//inclusive random number between 1 and 12
	function randomCrystalValue() {
		return Math.floor((Math.random() * 12) + 1);
	}



	function comparison() {
		
		if (currentValue == goalValue) {
			wins++;
			console.log("wins " + wins);
			$("#wins").text(wins);
    		scoreSound.loop = false;
        	scoreSound.play();
			reset();
		}

			else if (currentValue > goalValue) {
				losses++;
				console.log("losses " + losses);
				$("#losses").text(losses);
				scoreSound.loop = false;
        		scoreSound.play();
				reset();
			}
	}

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

  	$("#instructionsClicker").click(function() {
  			$("#instructionsSlide").slideToggle("slow");
  	});
 
});