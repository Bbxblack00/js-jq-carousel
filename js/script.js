


function prevChange() {
  console.log('operativo');

  var activeImg = $('.active');
  var prevImg = activeImg.prev('img');


  activeImg.removeClass('active');
  prevImg.addClass('active');


}


function nextChange() {
  console.log('operativo');

  var activeImg = $('.active');
  var nextImg = activeImg.next('img');


  activeImg.removeClass('active');
  nextImg.addClass('active');


}



function init() {

  $('.prev').click(prevChange);
  $('.next').click(nextChange);

}

$(document).ready(init);
