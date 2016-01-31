/*global jQuery:false, Browser:false, console:false, alert: false */

(function($) {
	'use strict';

	$(function() {

		var popup      		= new Popups();
	});


	/* Popup functionality ---------*/
	function Popups() {
		this.openPopup       		= $('[data-popup-open]');
		this.closePopup      		= $('[data-popup-close]');
		this.overlay         		= $('[data-overlay="popup"]');
		this.overlayVisibleCLass 	= 'visible';
		this.popupActiveClass    	= 'active';
		this.events();
	}

	Popups.prototype.events = function() {
		var _this = this;

		//you can exclude Browser and replace Browser.click() with 'click' or 'tochstart'  ---*/
		$(document).on( Browser.click(), this.openPopup.selector, function(e) {
			e.preventDefault();
			var elToOpen = $(this).attr('data-popup-open');
			var timer    = null;

			if ( $(this).attr('data-autoclose') === 'yes' ) {
				$(this).closest('[data-popup]').removeClass('active');
			}

			_this.overlay.addClass( _this.overlayVisibleCLass );
			$('[data-popup="'+elToOpen+'"]').addClass('active');

			timer = $('[data-popup="'+elToOpen+'"]').attr('data-off-timer');

			if ( timer ) {
				var __this = _this;
				setTimeout(function() {

					$('[data-popup="'+elToOpen+'"]').removeClass('active');
					__this.overlay.removeClass( __this.overlayVisibleCLass );	

				}, timer);
			}
		});

		$(document).on( Browser.click(), this.closePopup.selector, function(e) {
			e.preventDefault();
			var elToClose = $(this).attr('data-popup-close');

			$('[data-popup="'+elToClose+'"]').removeClass('active');
			_this.overlay.removeClass( _this.overlayVisibleCLass );
		});

		$(document).on( Browser.click(), this.overlay.selector, function() {
			$('[data-popup]').removeClass('active');
			_this.overlay.removeClass( _this.overlayVisibleCLass );
		});
	};

})(jQuery);