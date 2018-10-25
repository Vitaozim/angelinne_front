jQuery(document).ready(function($) {

	// Chamadas bxslider
	var $callBlogSlider = $('#call-blog .ultimos-posts .bx-slides-cont');
	var $callBlogNav = $('#call-blog .ultimos-posts .bx-nav button');

	$callBlogSlider.bxSlider({
		controls: false,
		pager: false,
		adaptativeHeight: true,
	});

	$callBlogNav
		.first().addClass('ativo')
		.end()
		.on('click', function(event) {
			$callBlogNav.removeClass('ativo');
			$(this).addClass('ativo');
			var thisIndex = $callBlogNav.index($(this));
			$callBlogSlider.goToSlide(thisIndex);
		});


	var $videosDepos = $('.slider-videos .bx-videos');
	var $VideoDeposControls = $('.slider-videos button');

	$videosDepos.bxSlider({
		controls: false,
		pager: false,
		infiniteLoop: true,
		slideMargin: 5,
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		slideWidth: 400,
		shrinkItems: true
	});

	$VideoDeposControls.on('click', function(event) {
		if ($(this).hasClass('prev-slide')) {
			$videosDepos.goToPrevSlide();
		} else if ($(this).hasClass('next-slide')) {
			$videosDepos.goToNextSlide();
		}
	});



	// Menu global em smartphones
	var $btmenu = $('#cabecalho-principal .bt-menu');
	var $menuglobal = $('#cabecalho-principal ul.menu')
	$btmenu.on('click', function(event) {
		$menuglobal.toggleClass('ativo');
	});



	// Faq
	var $faq = $('.duvidas-frequentes');

	$faq.find('h4').on('click', function(event) {
		var $thisArticle = $(this).siblings('article');
		$faq.find('article').not($thisArticle).slideUp();
		$thisArticle.slideToggle();
	});
});


