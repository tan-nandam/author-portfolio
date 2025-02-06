$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$('.group1').colorbox({rel:'group1', maxWidth:'96%', maxHeight:'96%'});
                
                // append more info link to colorbox content
                $(document).bind('cbox_complete', function(){
                                
                                jQuery.fn.outerHTML = function() {
                                                return jQuery('<div />').append(this.eq(0).clone()).html();
                                };
                                
                                var extra = $.colorbox.element().parent().prev().outerHTML();
                                $('#cboxLoadedContent').append('<div id="extra-info">' + extra + '</div>');
                                
                });
                
                $('.lang').click(function(){
                        $('.container').toggleClass("el");
                        return false;
                });
                
                var winH = 0;
                var winH = $(document).height();
                
                
				$(window).load(function(){
					$('.grid').masonry();
				});
                
                
                /* layout color change  */
                $(".lwhite").click(function(){
                  $("body").removeClass("lblackon");             
                  $("body").toggleClass("lwhiteon");
                });
                $(".lblack").click(function(){
                  $("body").removeClass("lwhiteon");  
                  $("body").toggleClass("lblackon");
                });

				
                
                $(window).scroll(function() {
                if ($(window).scrollTop() > 400) {
                  $('.gotop').fadeIn(600);
                }
                else {
                  $('.gotop').fadeOut(600);
                }
              });
                
                $('.gotop a').click(function(){ // HOME
                                $('html, body').animate({
                                                    scrollTop: 0
                                                }, 500);
                                return false;
                });
                
                
			}); // end document ready
            
            
            var masonryUpdate = function() {
				setTimeout(function() {
                    
                    $('.grid').imagesLoaded(function () {
                        $('.grid').masonry();
                    });
                    
					$('.group1').colorbox({rel:'group1', maxWidth:'96%', maxHeight:'96%'});
                    
                
                   var tiltimg = document.getElementById("bkgimg");          
                    new TiltFx(  tiltimg , {
                                "opacity" : 0.6,
                                "movement": {
                                                "perspective" : 1500,
                                                "translateX" : 10,
                                                "translateY" : 8,
                                                "translateZ" : 4,
                                                "rotateX" : 3,
                                                "rotateY" : 3 } }
                                );
                    
				}, 100);
			}
            
			$(document).ajaxComplete(masonryUpdate);