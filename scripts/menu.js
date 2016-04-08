$('.links').load("menu.html");

$('.links a').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log($(this).text());
    $(".content").load($(this).attr("href"));
});

window.setTimeout(function(){
  $('.links').css("opacity", "1");
}, 400);
