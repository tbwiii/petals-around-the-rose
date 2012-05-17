var petals = {};

petals.current_roll = [];
    
petals.answer = 0;
    
petals.to_word = function (num) {
	if (num === 1) {
		return "one";
	} else if (num === 2) {
		return "two";
	} else if (num === 3) {
		return "three";
	} else if (num === 4) {
		return "four";
	} else if (num === 5) {
		return "five";
	} else if (num === 6) {
		return "six";
	}
}

petals.roll_the_die = function () {
 
    petals.answer = 0;

    $('.dice').each(function() {

    	i = Math.floor((Math.random()*6)+1);

    	$(this).attr("class", "dice " + petals.to_word(i));

        if (i === 3) {
            petals.answer += 2;
        } else if (i === 5) {
            petals.answer += 4
        }

    });

    return false;
    
}

$(function() {
	$('.guess').on("click", "a", function  (e) {
		var guess = parseInt($(this).html(), '10');

		if (guess === petals.answer) {
			console.log('correct')
		} else {
			console.log('NOPE')
		}
	})
});



