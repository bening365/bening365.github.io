  $('#iamhere').click(function(){


      $('#here').show()
  })
  
  
  $("#here").hide();

  $('#exit').click(function(){

$("#here").hide();
     
  })
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal', '.modaltwo');
    var instances = M.Modal.init(elems, options);
    
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });
       



























  








//   $('#childzero').click(function(){
//     $('#auntone').append('<img src="images/25.png">');
//     $("#aunttwo", "#auntthree", "#auntfour", "#auntfive", "#auntsix").hide();
// })

// $('#childone').click(function(){
//   $('#aunttwo').append('<img src="images/21.png">');
//   $("#auntone", "#auntthree", "#auntfour", "#auntfive", "#auntsix").hide();
// })





$(function(){  // $(document).ready shorthand
    $('h2', ".pageone").fadeIn('slow');
   
  });

  $('.email').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-paper-plane').addClass("next");
    } else {
      $('.icon-paper-plane').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.email').click(
  function(){
    console.log("Something");
    $('.email-section').addClass("fold-up");
    $('.password-section').removeClass("folded");
  }
);

$('.password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-lock').addClass("next");
    } else {
      $('.icon-lock').removeClass("next");
    }
  }
);

$('.next-button').hover(
  function(){
    $(this).css('cursor', 'pointer');
  }
);

$('.next-button.password').click(
  function(){
    console.log("Something");
    $('.password-section').addClass("fold-up");
    $('.repeat-password-section').removeClass("folded");
  }
);

$('.repeat-password').on("change keyup paste",
  function(){
    if($(this).val()){
      $('.icon-repeat-lock').addClass("next");
    } else {
      $('.icon-repeat-lock').removeClass("next");
    }
  }
);

$('.next-button.repeat-password').click(
  function(){
    console.log("Something");
    $('.repeat-password-section').addClass("fold-up");
    $('.success').css("marginTop", 0);
  }
);
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