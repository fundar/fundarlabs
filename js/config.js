/*
	Dopetrope 2.0 by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

window._skel_config = {
	preset: 'standard',
	prefix: 'css/style',
	resetCSS: true,
	breakpoints: {
		'desktop': {
			grid: {
				gutters: 50
			}
		}
	}
};

window._skel_panels_config = {
	preset: 'standard'
};

jQuery(function() {
	$('#nav > ul').dropotron({ 
		offsetY: -17,
		offsetX: -1,
		mode: 'fade',
		noOpenerFade: true,
		detach: false
	});
});

jQuery(function() {
	// Links
		var	_bh = jQuery('body, html'),
		_window = jQuery(window),
		_nav = jQuery('#nav');
	
		jQuery('a').click(function(e) {
			var t = jQuery(this), h = t.attr('href'), article;

			if (h.charAt(0) == '#' && h.length > 1 && (article = jQuery('article#' + h.substring(1))).length > 0)
			{
				var pos = Math.max(article.parent().offset().top - _nav.height() + 15, 0);
				e.preventDefault();
				_bh.animate({ scrollTop: pos }, 'slow', 'swing');
			}
		});

});
