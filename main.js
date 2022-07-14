jQuery('document').ready(function($) {
	var menuBtn = $('.menu-icon');
	var	menu = $('.navegation ul');

	menuBtn.click(function(){
		if (menu.hasClass('show')) {
			menu.removeClass('show');
		} else {
			menu.addClass('show');
		}
	});
});

$(document).ready(function(){
	$('.sections article').hide();
	$('.sections article:first').show();

	$('ul.tabs li a').click(function(){
		$('.sections article').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});
