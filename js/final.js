  $('#iamhere').click(function(){
      $('#here').show()
  })
  $("#here").hide();
  $('#exit').click(function(){
$("#here").hide();
     
  })




  $("#babydat").hide();
  $('#dat').click(function(){
$("#babydat").show();
     
  })










  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll();
    var instances = M.Modal.init(elems, options);
    
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
    $('#').click(function(){
       $('.sorry').onOpenStart();
    })
  });
       

$(function(){  // $(document).ready shorthand
    $('h2', ".pageone").fadeIn('slow');
   
  });

   $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('h2, img').each( function(i){
            console.log(this)
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, options);
      });
    
      // Or with jQuery
    
      $(document).ready(function(){
        $('.carousel').carousel();
      });
          

      $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 9005050000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
      
        });  
        
  
    });