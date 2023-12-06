//hide x icon
$(".x-icon").children("img").hide();
$(".item-text-container").hide();

//if menu clicked the icons fadeout and x-icon fadein
$(".menu > img").click(function () {
  $(".icon > img").fadeOut(200);
  $(".x-icon").children("img").fadeIn(400);
  $(".item-text-container").slideDown(400).fadeIn(200);
});

//select and store x-icon
let x_icon = $(".x-icon");

x_icon.click(function () {
  $(".icon > img").fadeIn(200);
  $(".x-icon").children("img").fadeOut(400);
  $(".item-text-container").slideUp(400).fadeOut(400);
});
// $(element).slideDown("slow").fadeOut("slow");
