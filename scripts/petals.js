var Petals = function () {

	var app = this;

	var Roll = function () {

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

	app.successMessages = [
		"You got it!",
		"Lucky guess?",
		"Good job",
		"How many is that now?",
		"Very nice",
		"yep"
	];

	app.failMessages = [
		"(╯°□°）╯︵ ┻━┻",
		"Did you try squinting?",
		"Try again.",
		"Does it hurt?",
		"C'mon, kids can get this.",
		"$#@(*&",
		"Nope...",
		"Mulligan",
		"Let's say that didn't count.",
		":*-(",
		"Super-complicated math"

	];

	app.alert = function (msg) {
		$alert = $("#alert");

		if (msg) {
				msg = app.successMessages[Math.floor(Math.random()*app.successMessages.length)];
			} else {
				msg = app.failMessages[Math.floor(Math.random()*app.failMessages.length)];
			}

		$alert.stop().slideUp(function () {

			$alert.children("p").html(msg);
		});

		$alert.slideToggle();

	};

	app.animate = function (node) {
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
	};

	app.play = function () {
		var roll = new Roll();

		$('.dice').each(function (i) {
			$this = $(this);

			$this.attr('class', 'dice d'+ roll.results[i]);

			app.animate($this);

		});

		return roll.answer;

	};

	app.toggle_buttons = function (answer) {
		$("#roll").toggleClass('hide');

		if (answer) {
			$(".guess").toggleClass('hide').children().each(function () {
				if ($(this).html() === answer.toString()) {
					$(this).on('click', function () {
						app.toggle_buttons();
						app.alert(true);
					});
				} else {
					$(this).on('click', function () {
						app.alert();
					});
				}
			});
		} else {
			$(".guess").toggleClass('hide').children().unbind();
		}
	};

	app.init = function() { // starts up the application

		$('#roll').on('click', function (e) {
			var answer = app.play();
			app.toggle_buttons(answer);
			e.preventDefault();

		});

		$('#show_rules, #overlay').on('click', function () {
			$('#overlay').stop().fadeToggle();
		});

		$("#alert").on('click', function () {
			$(this).slideUp();
		});

	};
};

petals = new Petals();

$(function() {
	petals.init();
});


