$(document).ready(function() {

  // dynamically setting picture as the background of the div
  $(".pdf-container").each(function(index, val) {
    var link = "url(" + $(val).find("img").attr("src") + ")";
    $(val).css("background-image", link);
  });

  $(".pdf-container").click(function(event) {
    console.log("left: " + event.offsetX + "; top: " + event.offsetY);
  });
  $('[data-toggle="popover"]').popover();
  $("button.more-info").each(function(index, val) {
    var popoverContent = $(this).find(".popover-content").html();
    $(this).attr("data-content", popoverContent);
  });

});
