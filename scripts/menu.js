$('.links').load("menu.html");

function linkPreventer(){
  $('.links a').click(function(e) {
    // Prevents links in the menu from opening the raw html pages.
    e.preventDefault();
    // Loads the html into the main content element.
    $(".content").load($(this).attr("href"));
  });
}

window.setTimeout(function(){
  linkPreventer();
  $('.links').css("opacity", "1");
}, 300);
