/*******************Flag***************************/
var audio = $("#sound")[0];
$(".flag").mouseenter(function() {
  audio.play();
}).mouseleave( function() {
  audio.pause();
});
/*******************Action***************************/
$(".myButton").bind('click', function () {
   
    $(".arrow").toggleClass('rotation');
    return false;
});
/************************JS**********************************/


   Array.prototype.dup = function () {
  	var i = 0;
   var result =  this.concat(this);
   return result;
}
var mass=[1,2,3,4];
console.log(mass.dup());



var i=0;
(function delay() {
    console.log(mass[i]);

    if (++i < mass.length) {
        setTimeout(delay, 1000);  
    }
})();



/********************Slider**************************/

    $(document).ready(function() {
 $(".slider").each(function () { 
  var obj = $(this);
 
  $(obj).append("<ol class='nav'></ol>");
  $(obj).find("li").each(function () {
  	var num= $(this).index()+1;
   $(obj).find(".nav").append("<li rel='"+$(this).index()+"'>"+num+"</li>"); 
   $(this).addClass("slider"+$(this).index());
  });
  $(obj).find("li").first().addClass("on"); 
 });
});
function sliderJS (obj, sl) { 
 var ul = $(sl).find("ul"); 
 var bl = $(sl).find("li.slider"+obj); 
 var step = $(bl).width(); 
 $(ul).animate({marginLeft: "-"+step*obj}, 500); 
}
$(document).on("click", ".slider .nav li", function() {
 var sl = $(this).closest(".slider"); 
 $(sl).find("li").removeClass("on"); 
 $(this).addClass("on"); 
 var obj = $(this).attr("rel"); 
 sliderJS(obj, sl); 
 return false;
});

/********************Menu************************************/
$(".menu_header").bind('click', function () {
   
        
    $(".menu").toggleClass('hide');
    return false;
});


