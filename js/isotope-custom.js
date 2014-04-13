jQuery(window).load(function(){

	var $container = $('.        <section id="hero" class="tbg1">
            <div id="layerslider-container-fw">
               <div id="layerslider" style="width: 100%; height: 530px; margin: 0px auto;">
    
                  <div class="ls-layer" style="slidedirection: left; slidedelay: 5000; durationin: 1500; durationout: 1500;">
                     <img src="images/portfo/dovecote-01.jpg" class="ls-bg" alt="">
                     <div class="ls-s1 " style=" position: absolute; top:80%; left: 50%;  slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;">
                       </div>                        
                  </div>

                  <div class="ls-layer" style=" slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500;">
                     <img src="images/portfo/dovecote-02.jpg" class="ls-bg" alt=""> 

                     <div class="ls-s1" style=" position: absolute; top:80%; left: 50%; slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;">
                     </div>
                  </div>

                 
                  
                  </div>
               </div>
slide-picslio');
	$container.isotope({
		filter: '*',
		//sortBy : 'random',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('nav.primary .        <section id="hero" class="tbg1">
            <div id="layerslider-container-fw">
               <div id="layerslider" style="width: 100%; height: 530px; margin: 0px auto;">
    
                  <div class="ls-layer" style="slidedirection: left; slidedelay: 5000; durationin: 1500; durationout: 1500;">
                     <img src="images/portfo/dovecote-01.jpg" class="ls-bg" alt="">
                     <div class="ls-s1 " style=" position: absolute; top:80%; left: 50%;  slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;">
                       </div>                        
                  </div>

                  <div class="ls-layer" style=" slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500;">
                     <img src="images/portfo/dovecote-02.jpg" class="ls-bg" alt=""> 

                     <div class="ls-s1" style=" position: absolute; top:80%; left: 50%; slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;">
                     </div>
                  </div>

                 
                  
                  </div>
               </div>
slide-picslioFilters a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
	  return false;
	});

	var $optionSets = $('nav.primary .        <section id="hero" class="tbg1">
            <div id="layerslider-container-fw">
               <div id="layerslider" style="width: 100%; height: 530px; margin: 0px auto;">
    
                  <div class="ls-layer" style="slidedirection: left; slidedelay: 5000; durationin: 1500; durationout: 1500;">
                     <img src="images/portfo/dovecote-01.jpg" class="ls-bg" alt="">
                     <div class="ls-s1 " style=" position: absolute; top:80%; left: 50%;  slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;">
                       </div>                        
                  </div>

                  <div class="ls-layer" style=" slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500;">
                     <img src="images/portfo/dovecote-02.jpg" class="ls-bg" alt=""> 

                     <div class="ls-s1" style=" position: absolute; top:80%; left: 50%; slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;">
                     </div>
                  </div>

                 
                  
                  </div>
               </div>
slide-picslioFilters'),
	       $optionLinks = $optionSets.find('a');
	 
	       $optionLinks.click(function(){
	          var $this = $(this);
		  // don't proceed if already selected
		  if ( $this.hasClass('selected') ) {
		      return false;
		  }
	   var $optionSet = $this.parents('nav.primary .        <section id="hero" class="tbg1">
            <div id="layerslider-container-fw">
               <div id="layerslider" style="width: 100%; height: 530px; margin: 0px auto;">
    
                  <div class="ls-layer" style="slidedirection: left; slidedelay: 5000; durationin: 1500; durationout: 1500;">
                     <img src="images/portfo/dovecote-01.jpg" class="ls-bg" alt="">
                     <div class="ls-s1 " style=" position: absolute; top:80%; left: 50%;  slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;">
                       </div>                        
                  </div>

                  <div class="ls-layer" style=" slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500;">
                     <img src="images/portfo/dovecote-02.jpg" class="ls-bg" alt=""> 

                     <div class="ls-s1" style=" position: absolute; top:80%; left: 50%; slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;">
                     </div>
                  </div>

                 
                  
                  </div>
               </div>
slide-picslioFilters');
	   $optionSet.find('.selected').removeClass('selected');
	   $this.addClass('selected'); 
	});

});
