


function prevChange() {





  // circle
  var activeCircle = $('i.active');
  var prevCircle = activeCircle.prev('i');
  var contrCircle = activeCircle.hasClass('first')





  // img
  var activeImg = $('img.active');
  var prevImg = activeImg.prev('img');
  var contrImg = activeImg.hasClass('first');





  if (contrImg && contrCircle) {

    prevCircle = $('i.last');
    activeCircle.removeClass('active');
    prevCircle.addClass('active');


    prevImg = $('img.last');
    activeImg.removeClass('active');
    prevImg.addClass('active');



  } else {


    activeCircle.removeClass('active');
    prevCircle.addClass('active');


    activeImg.removeClass('active');
    prevImg.addClass('active');


  }


}


function nextChange() {


  var activeCircle = $('i.active');
  var nextCircle = activeCircle.next('i');
  var contrCircle = activeCircle.hasClass('last');


  var activeImg = $('img.active');
  var nextImg = activeImg.next('img');
  var contrImg = activeImg.hasClass('last');

  if (contrImg && contrCircle) {


    nextCircle = $('i.first');
    activeCircle.removeClass('active');
    nextCircle.addClass('active');


    nextImg = $('img.first');
    activeImg.removeClass('active');
    nextImg.addClass('active');



  } else {


    activeCircle.removeClass('active');
    nextCircle.addClass('active');


    activeImg.removeClass('active');
    nextImg.addClass('active');


  }
}



function init() {

  $('.prev').click(prevChange);
  $('.next').click(nextChange);

}

$(document).ready(init);
