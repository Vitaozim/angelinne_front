jQuery(document).ready(function($) {
	var $callBlogSlider = $('#call-blog .ultimos-posts .bx-slides-cont');
	var $callBlogNav = $('#call-blog .ultimos-posts .bx-nav');

	var argsBx = {
		captions: false,
		controls: false,
		adaptativeHeight: true,
		pagerSelector: ''
	};

	argsBx.pagerSelector = $callBlogNav;

	$callBlogSlider.bxSlider(argsBx);


	var $btmenu = $('#cabecalho-principal .bt-menu');
	var $menuglobal = $('#cabecalho-principal ul.menu')
	$btmenu.on('click', function(event) {
		$menuglobal.toggleClass('ativo');
	});
});