


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
