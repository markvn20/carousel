$(document).ready(function() {
	$('.modal').hide()

	$('.container div').click(function() {
		var x = $(this).children().attr('src');
		$(this).addClass('active')
		$('.modal img').attr('src', x);
		$('.modal').slideDown(150)
	})

	$('.exit').click(function() {
		$('.modal').slideUp(150)
	})

	function condition() {
		if($('div').hasClass('active')) {
			var x = $('div.active').children().attr('src');
			$('.modal img').attr('src', x);
		}
	}

	$('.left').click(function() {
		var z = $('div.active');
		$('div.active').prev().addClass('active')
		$('div.active').next().removeClass('active')
		condition()
	})

	$('.right').click(function() {
		var z = $('div.active');
		$('div.active').next().addClass('active')
		$('div.active').prev().removeClass('active')
		condition()
	})
})
