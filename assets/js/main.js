function homeBoxes() {
	var height = $(".home-slider").height()
	$('.wide').height(height);
}

$(document).ready(function() {
		homeBoxes();
		 var $window = $(window),
      flexslider;


	  $('.home-slider .flexslider').flexslider({
	    animation: "slide"
	  });
	 	$('.logos-list .flexslider').flexslider({
	    animation: "slide",
	    animationLoop: false,
      itemWidth: 210,
      itemMargin: 0,
      maxItems: 8
	  });


   function getGridSize() {
  return (window.innerWidth < 600) ? 2 :
  			  (window.innerWidth < 1350) ? 6 :
         (window.innerWidth < 1570) ? 6 : 8;
  }

  $window.load(function() {
    $('.featured-list .flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 0,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });

  $(".add-address").on("click", function(e){
  	e.preventDefault();
  	$(".address-new").slideToggle();

  });



  












	

	$('.summerwear a').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('checked');
	});
	function mobileFilter() {
		var width = $(window).width();
		var open = false;
		if (width < 768) {
			$('.filter-vertical .filter-list').hide();
			$('.filter-header').on('click', function() {
				if (!open) {
					$('.filter-vertical .filter-list').stop(true, true).slideDown('slow');
					open = true;
				} else {
					$('.filter-vertical .filter-list').stop(true, true).slideUp('slow');
					open = false;
				}
			});
		} else {
			$(".filter-vertical .filter-list").show();
			open = false;
		}
	}

	function variantSelection() {
		var variantCount = 0
		$('*[data-role="variant-selector"]').each(function() {
			variantCount++
			$(this).attr("data-priority", variantCount);
					
		})      
		$('*[data-role="variant"]').on("click", function(e) {
			var pickCheck = $(this).attr("data-pick");
			var current = parseFloat($(this).parents('*[data-role="variant-selector"]').attr("data-priority"));
			var next = parseFloat($(this).parents('*[data-role="variant-selector"]').attr("data-priority")) + 1;
			var tooltipDisable = $(".product-options").find('*[data-priority="' + next + '"]').parents('.variant-container').find(".tooltip-variant").addClass("tooltip-variant-disabled");
			resetOptions(current, variantCount);

			if ($(this).is('a')) {
				e.preventDefault();
			}
			if ($(this).is('select')) {
				$(this).on("change", function() {
					$(this).attr("data-pick", 1);
				});
			} else {
				$(this).parents('*[data-role="variant-selector"]').find('*[data-role="variant"]').each(function() {
					$(this).attr("data-pick", "0");
				});

				$(this).attr("data-pick", 1);
			}
		})
		$('.variant-container').on("mouseenter", function() {
			var previous = $(this).find('*[data-role="variant-selector"]').attr("data-priority") - 1;
			var found = $(".product-options").find('*[data-priority="' + previous + '"]').find('*[data-pick="1"]');
			if ((previous != 0) && (found.length == 0)) {           
				triggerTooltip($(this), "show");
			}
				 
		}).on("mouseleave", function() {
			var previous = $(this).find('*[data-role="variant-selector"]').attr("data-priority") - 1;
			var found = $(".product-options").find('*[data-priority="' + previous + '"]').find('*[data-pick="1"]');
			if ((previous != 0) && (found.length == 0)) {           
				triggerTooltip($(this), "hide");
			}
	 
		});
		$('*[data-role="variant-selector"]').each(function() {
			var previous = $(this).attr("data-priority") - 1;
			var found = $(".product-options").find('*[data-priority="' + previous + '"]').find('*[data-pick="1"]'); 
			var tooltipTarget = $(".product-options").find('*[data-priority="' + previous + '"]');
			if ((previous != 0) && (found.length == 0)) {           
				variantTooltip($(this), $(this).parents(".variant-container"))
			}

		});

	}
	function resetOptions(arg, limit) {
		var current = arg + 1;
		var next = current + 1;
		for (var i = current ; i <= limit; i++) {
			$('*[data-priority=' + i + ']').find('*[data-role="variant"]').each(function() {          
				$(this).attr("data-pick", 0);
				if ($(this).is('select')) {
					$(this).val($("select option:first").val())
				}
			});        
		}
		for (var i = next ; i <= limit; i++) {
			$('*[data-priority=' + i + ']').parents(".variant-container").find(".tooltip-variant").removeClass("tooltip-variant-disabled");
		}
	} 
	function variantTooltip(arg, target) {
		var content = arg.attr("data-tooltip");        
		target.prepend('<div class="tooltip-variant"><p>' + content + '</p></div')
	}
	function triggerTooltip(target, arg) {
		if (arg == "show") {
			target.find(".variant-content").addClass("effect-hover");
			target.find(".tooltip-variant").addClass("tooltip-variant-visible");
		}
		if (arg == "hide") {
			target.find(".variant-content").removeClass("effect-hover");
			target.find(".tooltip-variant").removeClass("tooltip-variant-visible");
		}
			
	}
	mobileFilter()
	$(window).resize(function() {        
		mobileFilter();
	});   
	variantSelection()
	$('button[data-role="submit"]').on("click", function(e) {
		e.preventDefault
		alert("Galben sau Palarie ?")
	})
	$(".home-slider img").on("load", function(){
			 $(".home-slider").css("opacity","1");		
		});	
	$(window).on("load", function(){
		if ($(".home-slider").height() > 100) {
			homeBoxes();
			$(".wide").css("opacity","1");
			$(".featured-list").css("opacity","1");
			homeBoxes();
		}
	});

});

// $(window).resize(function() {
// 	homeBoxes();
// });
