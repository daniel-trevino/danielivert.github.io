$(document).ready(function() {
	
	

	
	
	$('h3.position').on('click', function() {
		$(this).siblings('.jobdescription').slideToggle('fast');
		$(this).toggleClass('active');
	});
	
	$('.nav-trigger').on('click', function() {
		$('#wrapper').toggleClass('moved');
		$('.navigation').toggleClass('open');
		$(this).toggleClass('active');
	});
	
	$('.navigation ul li a').on('click', function() {
		$('#wrapper').removeClass('moved');
		$('.navigation').removeClass('open');
		$('.nav-trigger').removeClass('active');
	});
	
// Smooth scroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash,
	    $target = $(target);

		if ($target && $target.length > 0) {
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
				window.location.hash = target;
			});
		};
	});


// Set class when scrolled to
	$.fn.visible = function(partial) {
		var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
		return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	};
	
	
	$(window).scroll(function(event) {

		$('.skillrating li').each(function(i, el) {
			var el = $(el);
			if (el.visible(true)) {
		  		el.addClass('show'); 
		  	} 
		});
	});
	
	
// Value removed on focus
	$.fn.extend({
	    emptyOnFocus: function () {
	        /// <summary>
	        ///Automagically empties the input(s) on focus (unless they have a different value from what they did when this function was called) and restores it to default value when they lose focus if it's empty
	        /// </summary>
	        $(this).each(function () {
	            var $this = $(this);
	            $this.data('defaultval', $this.val());
	            $this.focus(function (e) {
	                if ($this.val() == $this.data('defaultval')) {
	                    $this.val('');
	                }
	            });
	            $this.blur(function () {
	                if ($this.val().length === 0) {
	                    $this.val($this.data('defaultval'));
	                }
	            });
	        });
	    }
	});
	
	
	$('input[type="text"], input[type="email"], textarea').emptyOnFocus();
	
	
// Contact Lightbox
	var lightbox = $('.lightbox');
	var overlay = $('.overlay');
		
	$('.contact-trigger').on('click', function() {
		lightbox.addClass('visible');
		overlay.fadeIn('fast');
	});
	$('.lightbox .close').add(overlay).on('click', function() {
		lightbox.removeClass('visible');
		overlay.fadeOut('fast');
	});

	
	
	
}); //document ready