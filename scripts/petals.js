var petals = (function () {

	 function Roll () {

		var roll = {
			results : [],

			answer : 0
		};

		for (var i = 0;  i < 5 ; i = i + 1) {
			var dice = Math.floor((Math.random()*6)+1);
			roll.results.push(dice);


			if ( dice === 3 || dice === 5 ) {
				roll.answer = roll.answer + (dice - 1);
			}
		}

		return roll;
	};

	var successMessages = [
		"You got it!",
		"Well, you had to get it eventually...",
		"Good job",
		"Very nice",
		"Yep",
		"Again, again!",
		"Uh huh",
		"Keep it going"
	];

	var failMessages = [
		"(╯°□°）╯︵ ┻━┻",
		"Did you try squinting?",
		"Try again.",
		"Does it hurt?",
		"C'mon, kids can get this.",
		"$#@(*&",
		"Nope...",
		'"Mulligan"',
		"Let's say that didn't count.",
		":*-(",
		"Super-complicated math",
		"Boooooooo",
		"uh....no....",
		"Blame it on the rain",
		"Maybe just try tic-tac-toe?",
		"gooby plz",
		"Back to Farmville?",
		"Get on with it!",
		"Let me check...nope.",
		"Look at banner, Michael!",
		"You're just not alpha, bro",
		"Bro, bro, c'mon, bro, for real bro, bro",
		"You're out of your element, Donnie.",
		"How many fails is that now?",
		"..."

	];

	function banner (msg) {
		$banner = $("#banner");

		$banner.empty();

		if (msg) {
			msg = successMessages[Math.floor(Math.random()*successMessages.length)];
		} else {
			msg = failMessages[Math.floor(Math.random()*failMessages.length)];
		}

		var tag = $("<p>", { html : msg, "class" : "hide" });

		$banner.append(tag).children('p').slideDown().delay(1500).slideUp();
	}

	function animate (node) {
		var y = Math.floor((Math.random()*7)+3),
			z = Math.floor((Math.random()*7)+3),
			x = Math.floor((Math.random()*6)),
			time1 = Math.floor(Math.random() * (400 - 250 + 1)) + 250,
			time2 = Math.floor(Math.random() * (320 - 185 + 1)) + 250,
			time3 = Math.floor(Math.random() * (220 - 100 + 1)) + 250;

		$(node).animate({ 'margin-top': "-"+y+"00px", 'margin-bottom': +y+"00px"  }, time1)
				.animate({ 'margin-top': "+="+y+"00px", 'margin-bottom': "-="+y+"00px" },time2)
				.animate({ 'margin-top': "-="+z+"0px", 'margin-bottom': "+="+z+"0px" }, time2)
				.animate({ 'margin-top': "+="+x+"0px", 'margin-bottom': "-="+z+"0px" },time3);
	}

	function play () {
		var roll = new Roll();

		$('.dice').each(function (i) {
			$this = $(this);

			$this.attr('class', 'dice d'+ roll.results[i]);

			animate($this);

		});
		return roll.answer;
	}

	toggle_buttons = function (answer) {
		$("#roll").toggleClass('hide');

		if (answer || answer === 0) {
			$(".guess").toggleClass('hide').children('a').each(function (e) {
				if ($(this).html() === answer.toString()) {
					$(this).on('click', function () {
						banner(true);
						toggle_buttons();
						e.preventDefault();
					});
				} else {
					$(this).on('click', function (e) {
						banner();
						e.preventDefault();
					});
				}
			});
		} else {
			$(".guess").toggleClass('hide').children().unbind();
		}
	};

	function init () { // starts up the application

		$('#roll').on('click', function (e) {
			var answer = play();
			toggle_buttons(answer);
			e.preventDefault();

		});

		$('#show_rules, #overlay').on('click', function () {
			$('#overlay').stop().fadeToggle();
		});

		$("#banner").on('click', function () {
			$(this).slideUp();
		});

	}

	return {
		init: init
	};
})();

petals.init();



