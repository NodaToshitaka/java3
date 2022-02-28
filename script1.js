console.log("start");
$(function(){
  $('.s-nav').on('click', function(event){
    $(this).toggleClass('active');
    event.preventDefault();
  })
})

$(function() {
  $('.rollback a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});