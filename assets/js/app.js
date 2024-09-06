const root = document.querySelector(':root');
const root_styles = getComputedStyle(root);
const css_green = root_styles.getPropertyValue('--my_green').trim();
const css_white = root_styles.getPropertyValue('--my_white').trim();
console.log(css_green);


$(document).ready(function() 
{
	// link hover functionality
	$('#nav a').hover(
		function() 
		{
			// on mouse hover change color to my green
			$(this).css('color', css_green);

		},
		function()
		{
			// go back to original when mouse moves away
			$(this).css('color', css_white);
		}
	);
});
