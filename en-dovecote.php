<?php include ('_header.php'); ?>
  <section class="container page-content"> 
   <hr class="vertical-space2" /> 
   <div class="eleven columns portfolio-item"> 
    <h1 data-l10n-id="room-name"></h1> 
    <h3 class="slight" data-l10n-id="short-description"></h3> 
   </div> 
   <div class="alignright"> 
    <a href="http://www.booking.com/hotel/fr/le-manoir-equivocal-zhi-yuan.php?aid=330843;lang=en" target="blank"><button type="button" class="small green bordered-bot" data-l10n-id="CheckAvailability"></button> </a> 
   </div>  
   <hr class="vertical-space2" /> 
   <div class="sixteen columns"> 
    <section id="hero" class="tbg1"> 
     <div id="layerslider-container-fw"> 
      <div id="layerslider" style="width: 100%; height: 530px; margin: 0px auto;"> 
       <div class="ls-layer" style="slidedirection: left; slidedelay: 5000; durationin: 1500; durationout: 1500;"> 
        <img src="images/portfo/dc-01.jpg" class="ls-bg" alt="" /> 
        <div class="ls-s1 " style=" position: absolute; top:80%; left: 50%;  slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;"> 
        </div> 
       </div> 
       <div class="ls-layer" style=" slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500;"> 
        <img src="images/portfo/dc-02.jpg" class="ls-bg" alt="" /> 
        <div class="ls-s1" style=" position: absolute; top:80%; left: 50%; slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;"> 
        </div> 
       </div> 
       <div class="ls-layer" style="slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500; delayout: 500;"> 
        <img src="images/portfo/dc-03.jpg" class="ls-bg" alt="" /> 
        <div class="ls-s1" style=" position: absolute; top:80%; left: 50%; slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;"> 
        </div> 
       </div> 
       <div class="ls-layer" style=" slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500; delayout: 500;"> 
        <img src="images/portfo/dc-04.jpg" class="ls-bg" alt="" /> 
        <div class="ls-s1" style=" position: absolute; top:80%; left: 50%; slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;"> 
        </div> 
        <div class="ls-layer" style=" slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500; delayout: 500;"> 
         <img src="images/portfo/dc-05.jpg" class="ls-bg" alt="" /> 
         <div class="ls-s1" style=" position: absolute; top:80%; left: 50%;  slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;"> 
         </div> 
         <div class="ls-layer" style=" slideoutdirection : left; slidedelay: 5000; durationin: 1500; durationout: 1500; delayout: 500;"> 
          <img src="images/portfo/dc-06.jpg" class="ls-bg" alt="" /> 
          <div class="ls-s1" style=" position: absolute; top:80%; left: 50%; slideoutdirection : left; durationin : 0; durationout : 750; easingin : easeInOutQuint; easingout : easeInBack; delayin : 400;"> 
          </div> 
         </div> 
        </div> 
       </div>
      </div>
     </div>
    </section> 
   </div> 
   <article class="sixteen columns"> 
    <hr class="vertical-space1" /> 
    <p data-l10n-id="long-description"></p> 
   </article> 

   <h4 data-l10n-id="what-is-included" class="subtitle"></h4> 
   <p data-l10n-id="what-is-included-list"></p>
   <hr class="vertical-space1" /> 


   <div class="sixteen columns"> 
    <script type="text/javascript" src="http://www.booking.com/general.php?tmpl=bookit;aid=330843;lang=en-us;hotel_id=272487;cc1=fr;hotel_page=le-manoir-equivocal-zhi-yuan"></script> 
   </div> 
   <hr class="vertical-space2" /> 
   
   
   <div class="clear"></div> 
   <!-- Latest Projects - Start --> 
   <hr class="vertical-space1" /> 
  </section> 
  
  
    <?php include ('_areasofthemanor.php'); ?>

  <section class="container"> 
   <hr class="vertical-space2" /> 
   <!-- Latest Projects-end --> 
   <hr class="vertical-space2" /> 
  </section>
  <!-- container --> 
  <hr class="vertical-space1" /> 
  <hr class="vertical-space1" /> 
  <hr class="vertical-space3" /> 
  <section class="footbot"> 
   <div class="container"> 
   </div> 
   <!-- footer-navigation /end --> 
  </section> 
  <!-- end-footbot -->  
  <!-- end-footer --> 
  <span id="scroll-top"><a class="scrollup"><img src="images/back-home-en.png" alt="" /></a></span>  
  <!--                <div class="footer-navi">© 2013 <a href="">Manoir Equivocal</a> All Rights Reserved. 2014</div>
         --> 
  <!-- end-wrap --> 
  <!-- End Document
         ================================================== --> 
  <script src="js/jquery.jcarousel.min.js"></script> 
  <script src="layerslider/jQuery/jquery-easing-1.3.js" type="text/javascript"></script> 
  <script src="layerslider/js/layerslider.kreaturamedia.jquery.js" type="text/javascript"></script> 
  <script type="text/javascript">
         $(document).ready(function(){
         $('#layerslider').layerSlider({
         skinsPath : 'layerslider/skins/',
         skin : 'florida',
         navStartStop        : false,
         thumbnailNavigation : 'hover',
         hoverPrevNext : true,
         responsive : true,
         responsiveUnder : 1200,
         thumbnailNavigation : false,
         sublayerContainer : 1200
         });
         });    
      </script> 
  <script type="text/javascript" src="js/doubletaptogo.js"></script> 
  <script defer="" src="js/jquery.flexslider-min.js"></script> 
  <script src="js/bootstrap-alert.js"></script> 
  <script src="js/bootstrap-dropdown.js"></script> 
  <script src="js/bootstrap-tab.js"></script> 
  <script src="js/bootstrap-tooltip.js"></script> 
  <script type="text/javascript" src="js/florida-custom.js"></script> 
  <script src="js/jquery.prettyPhoto.js"></script> 
  <script type="text/javascript" src="js/jquery.sticky.js"></script> 
  <script type="text/javascript" src="js/jquery.easy-pie-chart.js"></script>  
 </body>
</html>