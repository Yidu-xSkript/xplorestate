(function($){
"use strict";

$(document).ready(function(){

	$(function() {
		function mmenuInit() {
			var wi = $(window).width();
			if(wi <= '992') {

				$('#footer').removeClass("sticky-footer");

				$(".mmenu-init" ).remove();
				$("#navigation").clone().addClass("mmenu-init").insertBefore("#navigation").removeAttr('id').removeClass('style-1 style-2').find('ul').removeAttr('id');
				$(".mmenu-init").find(".container").removeClass("container");

				$(".mmenu-init").mmenu({
				 	"counters": true
				}, {
				 offCanvas: {
				    pageNodetype: "#wrapper"
				 }
				});

				var mmenuAPI = $(".mmenu-init").data( "mmenu" );
				var $icon = $(".hamburger");

				$(".mmenu-trigger").click(function() {
					mmenuAPI.open();
				});

				mmenuAPI.bind( "open:finish", function() {
				   setTimeout(function() {
				      $icon.addClass( "is-active" );
				   });
				});
				mmenuAPI.bind( "close:finish", function() {
				   setTimeout(function() {
				      $icon.removeClass( "is-active" );
				   });
				});


			}
			$(".mm-next").addClass("mm-fullsubopen");
		}
		mmenuInit();
		$(window).resize(function() { mmenuInit(); });
	});

    $('.user-menu').on('click', function(){
		$(this).toggleClass('active');
	});

	$('.top-bar-dropdown').on('click', function(event){
		$('.top-bar-dropdown').not(this).removeClass('active');
		if ($(event.target).parent().parent().attr('class') == 'options' ) {
			hideDD();
		} else {
			if($(this).hasClass('active') &&  $(event.target).is( "span" )) {
				hideDD();
			} else {
				$(this).toggleClass('active');
			}
		}
		event.stopPropagation();
	});

	$(document).on('click', function(e){ hideDD(); });

	function hideDD(){
		$('.top-bar-dropdown').removeClass('active');
	}

	$('#map-container .adv-search-btn').on('click', function(e){

		if ( $(this).is(".active") ) {

			$(this).removeClass("active");
			$(".main-search-container").removeClass("active");
			setTimeout( function() {
				$("#map-container.homepage-map").removeClass("overflow")
			}, 0);

		} else {

			$(this).addClass("active");
			$(".main-search-container").addClass("active");
			setTimeout( function() {
				$("#map-container.homepage-map").addClass("overflow")
			}, 400);

		}

		e.preventDefault();
	});

	function inlineCSS() {
		$(".some-classes, section.fullwidth, .img-box-background, .flip-banner, .property-slider .item, .fullwidth-property-slider .item, .fullwidth-home-slider .item, .address-container").each(function() {
			var attrImageBG = $(this).attr('data-background-image');
			var attrColorBG = $(this).attr('data-background-color');

	        if(attrImageBG !== undefined) {
	            $(this).css('background-image', 'url('+attrImageBG+')');
	        }

	        if(attrColorBG !== undefined) {
	            $(this).css('background', ''+attrColorBG+'');
	        }
		});

	}
	inlineCSS();


	$('#titlebar .listing-address').on('click', function(e){
	    e.preventDefault();

	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top-40
	    }, 600);
	});

	$(".tooltip.top").tipTip({
	  defaultPosition: "top"
	});

	$(".tooltip.bottom").tipTip({
	  defaultPosition: "bottom"
	});

	$(".tooltip.left").tipTip({
	  defaultPosition: "left"
	});

	$(".tooltip.right").tipTip({
	  defaultPosition: "right"
	});

	var propertyPricing = parseFloat($('.property-price').text().replace(/[^0-9\.]+/g,""));
	if (propertyPricing > 0) {
		$('.pick-price').on('click', function(){
			$('#amount').val(parseInt(propertyPricing));
		});
	}

	$(document).on('change', function() {
		$("#interest").val($("#interest").val().replace(/,/g, '.'));
	});

	function mortgageCalc() {
		var amount = parseFloat($("#amount").val().replace(/[^0-9\.]+/g,"")),
			months =parseFloat($("#years").val().replace(/[^0-9\.]+/g,"")*12),
			down = parseFloat($("#downpayment").val().replace(/[^0-9\.]+/g,"")),
			annInterest = parseFloat($("#interest").val().replace(/[^0-9\.]+/g,"")),
			monInt = annInterest / 1200,
			calculation = ((monInt + monInt / (Math.pow(1 + monInt, months) - 1)) * (amount - (down || 0))).toFixed(2);

			if (calculation > 0 ){
				$(".calc-output-container").css({'opacity' : '1', 'max-height' : '200px' });
				$(".calc-output").hide().html(calculation + ' ' + $('.mortgageCalc').attr("data-calc-currency")).fadeIn(300);
			}
	}

	$('.calc-button').on('click', function(){
		mortgageCalc();
	});


	if("ontouchstart" in window){
	    document.documentElement.className = document.documentElement.className + " touch";
	}

	function fullscreenFix(){
	    var h = $('body').height();
	    $(".content-b").each(function(i){
	        if($(this).innerHeight() > h){ $(this).closest(".fullscreen").addClass("overflow");
	        }
	    });
	}
	$(window).resize(fullscreenFix);
	fullscreenFix();

	if(navigator.userAgent.match(/Trident\/7\./)) {
	    $('body').on("mousewheel", function () {
	        event.preventDefault();

	        var wheelDelta = event.wheelDelta;
	        var currentScrollPosition = window.pageYOffset;
	        window.scrollTo(0, currentScrollPosition - wheelDelta);
	    });
	}

	// $('.carousel').owlCarousel({
	// 	autoPlay: false,
	// 	navigation: true,
	// 	slideSpeed: 600,
	// 	items : 3,
	// 	itemsDesktop : [1239,3],
	// 	itemsTablet : [991,2],
	// 	itemsMobile : [767,1]
	// });

	 $('.property-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.property-slider-nav',
		centerMode: true,
		slide: ".item",
		 adaptiveHeight: true
	});

	$('.property-slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.property-slider',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 993,
			  settings: {
			   		slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 767,
			  settings: {
			   		slidesToShow: 3,
			  }
			}
		]
	});

	 $('.fullwidth-home-slider').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		responsive: [
			{
			  breakpoint: 1367,
			  settings: {
			    centerPadding: '0'
			  }
			},
			{
			  breakpoint: 993,
			  settings: {
			    centerPadding: '0'
			  }
			}
		]
	});
	$('.popup-with-zoom-anim').magnificPopup({
		 type: 'inline',

		 fixedContentPos: false,
		 fixedBgPos: true,

		 overflowY: 'auto',

		 closeBtnInside: true,
		 preloader: false,

		 midClick: true,
		 removalDelay: 300,
		 mainClass: 'my-mfp-zoom-in'
	});


	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		 disableOn: 700,
		 type: 'iframe',
		 mainClass: 'mfp-fade',
		 removalDelay: 160,
		 preloader: false,

		 fixedContentPos: false
	});

	if(navigator.userAgent.match(/Trident\/7\./)) {
	    $('#footer').removeClass("sticky-footer");
	}

	$('.img-box').each(function(){

		$(this).append('<div class="img-box-background"></div>');
		$(this).children('.img-box-background').css({'background-image': 'url('+ $(this).attr('data-background-image') +')'});
	});

	function gridLayoutSwitcher() {

		var listingsContainer = $('.listings-container');

		if ( $(listingsContainer).is(".list-layout") ) {
			owlReload();
			$('.layout-switcher a.grid, .layout-switcher a.grid-three').removeClass("active");
			$('.layout-switcher a.list').addClass("active");
		}

		if ( $(listingsContainer).is(".grid-layout") ) {
			owlReload();
			$('.layout-switcher a.grid').addClass("active");
			$('.layout-switcher a.grid-three, .layout-switcher a.list').removeClass("active");
			gridClear(2);
		}

		if ( $(listingsContainer).is(".grid-layout-three") ) {
			owlReload();
			$('.layout-switcher a.grid, .layout-switcher a.list').removeClass("active");
			$('.layout-switcher a.grid-three').addClass("active");
			gridClear(3);
		}

		function gridClear(gridColumns) {
			$(listingsContainer).find(".clearfix").remove();
			$(".listings-container > .listing-item:nth-child("+gridColumns+"n)").after("<div class='clearfix'></div>");
		}

		var resizeObjects =  $('.listings-container .listing-img-container img, .listings-container .listing-img-container');

		function listLayout() {
			if ( $('.layout-switcher a').is(".list.active") ) {

				$(listingsContainer).each(function(){
					$(this).removeClass("grid-layout grid-layout-three");
					$(this).addClass("list-layout");
				});

				$('.listing-item').each(function(){
					var listingContent = $(this).find('.listing-content').height();
					$(this).find(resizeObjects).css('height', ''+listingContent+'');
				});
			}
		} listLayout();

		$(window).on('load resize', function() {
			listLayout();
		});

		$('.layout-switcher a.grid').on('click', function(e) { gridClear(2); });

		function gridLayout() {
			if ( $('.layout-switcher a').is(".grid.active") ) {

				$(listingsContainer).each(function(){
					$(this).removeClass("list-layout grid-layout-three");
					$(this).addClass("grid-layout");
				});

				$('.listing-item').each(function(){
					$(this).find(resizeObjects).css('height', 'auto');
				});

			}
		} gridLayout();

		$('.layout-switcher a.grid-three').on('click', function(e) { gridClear(3); });

		function gridThreeLayout() {
			if ( $('.layout-switcher a').is(".grid-three.active") ) {

				$(listingsContainer).each(function(){
					$(this).removeClass("list-layout grid-layout");
					$(this).addClass("grid-layout-three");
				});

				$('.listing-item').each(function(){
					$(this).find(resizeObjects).css('height', 'auto');
				});

			}
		} gridThreeLayout();

		$(window).on('resize', function() {
			$(resizeObjects).css('height', '0');
			listLayout();
			gridLayout();
			gridThreeLayout();
		});

		$(window).on('load resize', function() {
			var winWidth = $(window).width();

			if(winWidth < 992) {
				owlReload();
				gridClear(2);
			}

			if(winWidth > 992) {
				if ( $(listingsContainer).is(".grid-layout-three") ) {
					gridClear(3);
				}
				if ( $(listingsContainer).is(".grid-layout") ) {
					gridClear(2);
				}
			}

			if(winWidth < 768) {
				if ( $(listingsContainer).is(".list-layout") ) {
					$('.listing-item').each(function(){
						$(this).find(resizeObjects).css('height', 'auto');
					});
				}
			}

			if(winWidth < 1366) {
				if ( $(".fs-listings").is(".list-layout") ) {
					$('.listing-item').each(function(){
						$(this).find(resizeObjects).css('height', 'auto');
					});
				}
			}
		});

		function owlReload() {
			$('.listing-carousel').each(function(){
				$(this).data('owlCarousel').reload();
			});
		}

		$('.layout-switcher a').on('click', function(e) {
		    e.preventDefault();

		    var switcherButton = $(this);
		    switcherButton.addClass("active").siblings().removeClass('active');
			$(resizeObjects).css('height', '0');

			owlReload();
			gridLayout();
			gridThreeLayout();
			listLayout();
		});

	} gridLayoutSwitcher();

	$("#area-range").each(function() {

		var dataMin = $(this).attr('data-min');
		var dataMax = $(this).attr('data-max');
		var dataUnit = $(this).attr('data-unit');

		$(this).append( "<input type='text' class='first-slider-value'disabled/><input type='text' class='second-slider-value' disabled/>" );

		$(this).slider({

		  range: true,
		  min: dataMin,
		  max: dataMax,
		  step: 10,
		  values: [ dataMin, dataMax ],

		  slide: function( event, ui ) {
			 event = event;
			 $(this).children( ".first-slider-value" ).val( ui.values[ 0 ]  + " " + dataUnit );
			 $(this).children( ".second-slider-value" ).val( ui.values[ 1 ] + " " +  dataUnit );
		  }
		});
		 $(this).children( ".first-slider-value" ).val( $( this ).slider( "values", 0 ) + " " + dataUnit );
		 $(this).children( ".second-slider-value" ).val( $( this ).slider( "values", 1 ) + " " + dataUnit );

	});

	$("#price-range").each(function() {

		var dataMin = $(this).attr('data-min');
		var dataMax = $(this).attr('data-max');
		var dataUnit = $(this).attr('data-unit');

		$(this).append( "<input type='text' class='first-slider-value' disabled/><input type='text' class='second-slider-value' disabled/>" );

		$(this).slider({

		  range: true,
		  min: dataMin,
		  max: dataMax,
		  values: [ dataMin, dataMax ],

		  slide: function( event, ui ) {
			 event = event;
			 $(this).children( ".first-slider-value" ).val( dataUnit  + ui.values[ 0 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
			 $(this).children( ".second-slider-value" ).val( dataUnit +  ui.values[ 1 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
		  }
		});
		 $(this).children( ".first-slider-value" ).val( dataUnit + $( this ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
		 $(this).children( ".second-slider-value" ).val( dataUnit  +  $( this ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );


	});

    $(window).on('load resize', function() {

		$('.agents-grid-container').masonry({
			itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
			columnWidth: '.grid-item',
			percentPosition: true
		});

		var agentAvatarHeight = $(".agent-avatar img").height();
		var agentContentHeight = $(".agent-content").innerHeight();

		if ( agentAvatarHeight < agentContentHeight ) {
			$('.agent-page').addClass('long-content');
		} else  {
			$('.agent-page').removeClass('long-content');
		}
    });

	$(".tip").each(function() {
		var tipContent = $(this).attr('data-tip-content');
		$(this).append('<div class="tip-content">'+ tipContent + '</div>');
	});

	$(".toggle-container").hide();

	$('.trigger, .trigger.opened').on('click', function(a){
		$(this).toggleClass('active');
		a.preventDefault();
	});

	$(".trigger").on('click', function(){
		$(this).next(".toggle-container").slideToggle(300);
	});

	$(".trigger.opened").addClass("active").next(".toggle-container").show();
	$("a.close").removeAttr("href").on('click', function(){
		$(this).parent().fadeOut(200);
    });

    var shake = "No";

    $('#message').hide();
    $('#contact input[type=text], #contact input[type=number], #contact input[type=email], #contact input[type=url], #contact input[type=tel], #contact select, #contact textarea').each(function(){

    });
	   $('#name, #comments, #subject').focusout(function() {
	       if (!$(this).val()) {
	           $(this).addClass('error').parent().find('mark').removeClass('valid').addClass('error');
	       }
	       else {
	           $(this).removeClass('error').parent().find('mark').removeClass('error').addClass('valid');
	       }
	         $('#submit')
	           .prop('disabled',false)
	           .removeClass('disabled');
	   });
	   $('#email').focusout(function() {
	       if (!$(this).val() || !isEmail($(this).val())) {
	           $(this).addClass('error').parent().find('mark').removeClass('valid').addClass('error');
	       } else {
	           $(this).removeClass('error').parent().find('mark').removeClass('error').addClass('valid');
	       }
	   });

	   $('#email').focusin(function() {
	        $('#submit')
	           .prop('disabled',false)
	           .removeClass('disabled');
	   });

    $('#submit').click(function() {
        $("#contact-message").slideUp(200,function() {
            $('#contact-message').hide();

            // Kick in Validation
            $('#name, #subject, #phone, #comments, #website, #email').triggerHandler("focusout");

            if ($('#contact mark.error').size()>0) {
                if(shake == "Yes") {
                    $('#contact').effect('shake', { times:2 }, 75, function(){
                        $('#contact input.error:first, #contact textarea.error:first').focus();
                    });
                } else $('#contact input.error:first, #contact textarea.error:first').focus();

                return false;
            }

        });
    });

    $('#contactform').submit(function(){

        if ($('#contact mark.error').size()>0) {
            if(shake == "Yes") {
            $('#contact').effect('shake', { times:2 }, 75);
            }
            return false;
        }

        var action = $(this).attr('action');

        $('#contact #submit').after('<img src="images/loader.gif" class="loader" />')

        $('#submit')
            .prop('disabled',true)
            .addClass('disabled');

        $.post(action, $('#contactform').serialize(),
            function(data){
                $('#contact-message').html( data );
                $('#contact-message').slideDown();
                $('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
                if(data.match('success') != null) $('#contactform').slideUp('slow');

            }
        );

        return false;

    });

    function isEmail(emailAddress) {

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        return pattern.test(emailAddress);
    }

    function isNumeric(input) {
        return (input - 0) == input && input.length > 0;
    }

    $('.panel-buttons button').on('click', function(e) {
	    $('.panel-dropdown').removeClass('active');
		$('.fs-inner-container.content').removeClass("faded-out");
    });



});
})(this.jQuery);
