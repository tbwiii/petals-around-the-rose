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

petals.signif1 = (678.2 / 458) + (92.45 % 50.400786) - (45 * .234) - 30.00000003;

petals.signif2 = (678.2 / 458) + (92.45 % 50.400786) - (45 * .234) - 28.00000003;

petals.roll_the_die = function () {
 
    petals.answer = 0;

    $('.dice').each(function() {

    	var i = Math.floor((Math.random()*6)+1);

    	var y = Math.floor((Math.random()*7)+3),
    		z = Math.floor((Math.random()*7)+3),
    		x = Math.floor((Math.random()*6)),
    		time1 = Math.floor(Math.random() * (400 - 250 + 1)) + 250,
    		time2 = Math.floor(Math.random() * (320 - 185 + 1)) + 250,
    		time3 = Math.floor(Math.random() * (220 - 100 + 1)) + 250;



    	$(this).attr("class", "dice " + petals.to_word(i))
    			.animate({ 'margin-top': "-"+y+"00px", 'margin-bottom': +y+"00px"  }, time1)
    			.animate({ 'margin-top': "+="+y+"00px", 'margin-bottom': "-="+y+"00px" },time2)
    			.animate({ 'margin-top': "-="+z+"0px", 'margin-bottom': "+="+z+"0px" }, time2)
    			.animate({ 'margin-top': "+="+x+"0px", 'margin-bottom': "-="+z+"0px" },time3);


        if (i === Math.round(petals.signif1) || i === Math.round(petals.signif2)) {
            petals.answer += (i -1);
        } 

    });

    $('a.roll').toggleClass('hide');
    $('div.guess').toggleClass('hide');

    return false;
    
}


petals.toggle_overlay = function () {
	$('#overlay').fadeToggle();
}

petals.toggle = function (id) {
	if (typeof (id) === "object") {
		id = $(id.target).data('params');
	}

	$('#'+id).toggleClass('hide');
	this.toggle_overlay();
}

petals.guess = function (e) {
	var guess = parseInt($(e.target).html(), '10');

		if (guess === petals.answer) {
			this.toggle('right');
			$('a.roll').toggleClass('hide');
   			$('div.guess').toggleClass('hide');
		} else {
			this.toggle('wrong');
		}
}



//===================== Page-loaded code ================//
$(function() {
	$('#overlay').removeClass('hide').hide();

	petals.actions = document.getElementsByTagName("a");

	for( var i = 0 ; i < petals.actions.length ; i += 1) {
		petals.actions[i].onclick = (function (e) {
			petals[$(e.target).data('action')](e);
		});
	}

	// $('.guess').on("click", "a", function (e) {
	// 	var guess = parseInt($(this).html(), '10');

	// 	if (guess === petals.answer) {
	// 		console.log('correct')
	// 	} else {
	// 		console.log('NOPE')
	// 	}
	// })
});



