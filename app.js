// $(function (){
//   $('.box1').on('click', function (){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function (){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});