$('.search-menu li a[class != "active"]').hide();
$('#btn .btn-off').hide();

$('#btn .btn-on').on('click', function(){
  $('.search-menu li a').show();
  $('#btn .btn-on').hide();
  $('#btn .btn-off').show();
})

$('#btn .btn-off').on('click', function(){
  $('.search-menu li a[class != "active"]').hide();
  $('#btn .btn-off').hide();
  $('#btn .btn-on').show();
})


$(function(){
  $('#round').on('click', function(event){
    $(this).toggleClass('active');
    event.preventDefault();
  })
})

const popWin = document.getElementById('popWin');

$(function(){
  $('#round2').on('click', function(){
    $(this).toggleClass('active');
    popWin.style.display = 'flex';
  })
})

const close = document.getElementById('close')
close.addEventListener('click', () => {
  popWin.style.display = 'none';
});

