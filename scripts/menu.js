$('.links').load("menu.html");

$('.links a').on('click', 'a', function(e) {
    e.preventDefault();
    console.log($(this).text());
    $(".content").load($(this).attr("href"));
});

window.setTimeout(function(){
  $('.links').css("opacity", "1");
}, 400);
