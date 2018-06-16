const mq = window.matchMedia( "(max-width: 800px)" );

$('.sidebar-show a').on('click', function(){
  if(mq.matches){
    $('.side-navbar').css('width','100%');
  } else{
    $('.side-navbar').css('width','20%');
  }
});

$('.side-navbar #close-icon').on('click', function(){
  $('.side-navbar').css('width','0');
  });


$(window).on('resize',function(){
  var win = $(this);
  if($('.side-navbar').width()>0) {
    if(win.width() >= 800){
      $('.side-navbar').css('width','20%');
    } else{
      $('.side-navbar').css('width','100%');
    }
  }
});


$("a[href^='#']").click(function(e) {
	e.preventDefault();
	var position = $($(this).attr("href")).offset().top;
	$("body, html").animate({
		scrollTop: position
	}, 1500 );
});



$('.section .thumbnail')
    .mouseover(function(){
    $(this).find('.img-desc').css('height','15%'); 
    // $(this).find('p').css('margin-top','2%');
    })
    .mouseout(function(){
    $(this).find('.img-desc').css('height','0');
    })


$(document).scroll(function(){
    var top = $('.header');
    $('.logo-left h4').toggleClass('change-color', 
      $(this).scrollTop()>top.height());
    $('.sidebar-show h4').toggleClass('change-color', 
      $(this).scrollTop()>top.height());
});



window.sr = ScrollReveal();

sr.reveal($('.section-nav'), {
  duration:1500,
  distance:'30px',
  viewFactor:0.2
});

sr.reveal($('.module'), {
  duration:1500,
  distance:'30px',
  viewFactor:0.2
});


sr.reveal($('.shopping .thumbnail'),{
  duration:1500,
  distance:'300px',
  origin:'left',
  viewFactor:0.2
})

sr.reveal($('.shopping .content'),{
  duration:1500,
  distance:'300px',
  origin:'right',
  viewFactor:0.2
})