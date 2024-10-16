// CSS variables 
const root = document.querySelector(':root');
const root_styles = getComputedStyle(root);
const css_green = root_styles.getPropertyValue('--my_green').trim();
const css_white = root_styles.getPropertyValue('--my_white').trim();
const css_black = root_styles.getPropertyValue('--my_black').trim();
const css_gray = root_styles.getPropertyValue('--my_gray').trim();
const css_off_white = root_styles.getPropertyValue('--my_off_white').trim();

// for typing effect
const text_arr = ["Welcome to my portfolio.", "A little about me...", "Engineering a wearable instrument."];
const typing_speed = 100;

// determines main header fade in time (in ms)
const fade_in_ms = 750;

const type_text = (str, index) => {
	if (index < str.length) {
		$('#typing-text').append(str[index]);
		index++;
		setTimeout(type_text, typing_speed, str, index);
	}
}

const rgb_to_hex = (rgb) => {
	var result = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" +
        ("0" + parseInt(result[1]).toString(16)).slice(-2) +
        ("0" + parseInt(result[2]).toString(16)).slice(-2) +
        ("0" + parseInt(result[3]).toString(16)).slice(-2);
}

$(document).ready(function() {
	// fade in functionality for the into div...
	$("#intro h1").hide().fadeIn(fade_in_ms);

	var index = 0;
	var path = window.location.pathname;
	var page = path.split('/').pop();
	if (page === 'index.html' || page === '' || page === '/' || page == undefined) {
		type_text(text_arr[0], index);
	} 
	else if (page == 'about.html') {
		type_text(text_arr[1], index);
	}
	else if (page == 'bootstrap.html') {
		type_text(text_arr[2], index);
	}

	// current nav panel should be white
	$('#nav a').each(function() {
		var navLinks = document.querySelectorAll('#nav a');
		var cur_url = window.location.href;
		if (this.href === cur_url || (cur_url.endsWith('/') && this.href.endsWith('index.html'))) 
		{
			$(this).css('background-color', css_white);
			$(this).css('color', css_black);
		}
	});

	// link hover functionality
	$('#nav a').hover(
		function() {
			var bg_color = window.getComputedStyle(this).backgroundColor;
			var color_as_hex = rgb_to_hex(bg_color);
			if (color_as_hex !== css_white) {
				$(this).css('color', css_green);
			}
			else {
				$(this).css('color', css_gray);
			}

		},
		function() {
			var bg_color = window.getComputedStyle(this).backgroundColor;
			var color_as_hex = rgb_to_hex(bg_color);

			// go back to original when mouse moves away
			if (color_as_hex !== css_white) {
				$(this).css('color', css_white);
			}
			else {
				$(this).css('color', css_black);
			}
		}
	);

	// for mobile phone support 
	if (!('ontouchstart' in document.documentElement)) {
		$('.column1, .column2, .column3').mouseenter(
			function() {
				$(this).css('background-color', css_off_white);
			}).mouseleave(
			function() {
				$(this).css('background-color', css_white);
			}
		);
	}

	$(".column1, .column2, .column3").click(function() {
		window.location.href = $(this).data("url");
	});
});
