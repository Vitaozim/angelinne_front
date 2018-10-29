jQuery(document).ready(function($) {

	// Chamadas bxslider

	var $mainSlider = $('#main-slider .bx-main');
	var $mainPager = $('#main-slider .bx-nav button');

	$mainSlider.bxSlider({
		controls: false,
		pager: false,
		infiniteLoop: true,
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			$mainPager.removeClass('ativo').eq(newIndex).addClass('ativo');
		}
	});

	$mainPager
	.first().addClass('ativo')
	.end()
	.on('click', function(event) {
		var thisIndex = $mainPager.index($(this));
		$mainSlider.goToSlide(thisIndex);
	});


	var $callBlogSlider = $('#call-blog .ultimos-posts .bx-slides-cont');
	var $callBlogNav = $('#call-blog .ultimos-posts .bx-nav button');

	$callBlogSlider.bxSlider({
		controls: false,
		pager: false,
		adaptativeHeight: true,
		onSlideAfter: function($slideElement, oldIndex, newIndex){
			$callBlogNav.removeClass('ativo').eq(newIndex).addClass('ativo');
		}

	});

	$callBlogNav
	.first().addClass('ativo')
	.end()
	.on('click', function(event) {
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


