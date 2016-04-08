$('.links').load("menu.html");

window.setTimeout(function(){
  $('.links').css("opacity", "1");
}, 400);

$('.links a').click(function(e) {
    e.preventDefault();
    $(".content").load($(this).attr("href"));
});
