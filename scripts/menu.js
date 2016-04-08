$('.links').load("menu.html");

function linkPreventer(){
  $('.links a').click(function(e) {
    // Prevents links in the menu from opening the raw html pages.
    e.preventDefault();
    // Loads the html into the main content element.
    $(".content").load($(this).attr("href"));

    // Sets the link to match the current page
    $('.links a').removeClass("active");
    $(this).addClass("active");
  });
}

window.setTimeout(function(){
  linkPreventer();
  $('.links').css("opacity", "1");
}, 300);
