


function prevChange() {
  console.log('operativo');

  var activeImg = $('.active');
  var prevImg = activeImg.prev('img');
  var contr = activeImg.hasClass('first');

  if (contr) {


    prevImg = $('img.last');
    activeImg.removeClass('active');
    prevImg.addClass('active');



  } else {


    activeImg.removeClass('active');
    prevImg.addClass('active');


  }


}


function nextChange() {
  console.log('operativo');

  var activeImg = $('.active');
  var nextImg = activeImg.next('img');
  var contr = activeImg.hasClass('last');

  if (contr) {


    nextImg = $('img.first');
    activeImg.removeClass('active');
    nextImg.addClass('active');



  } else {


    activeImg.removeClass('active');
    nextImg.addClass('active');


  }
}



function init() {

  $('.prev').click(prevChange);
  $('.next').click(nextChange);

}

$(document).ready(init);
