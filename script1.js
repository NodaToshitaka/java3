console.log("start");
$(function(){
  $('.s-nav').on('click', function(event){
    $(this).toggleClass('active');
    event.preventDefault();
  })
})