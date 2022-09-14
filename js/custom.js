//
$(document).ready(function () {
  $("#fullpage").fullpage({
    verticalCentered: false,
    scrollingSpeed: 600,
    autoScrolling: false,
    css3: true,
    navigation: true,
    navigationPosition: "right",
  });
});

// wow
$(function () {
  new WOW().init();
  $(".rotate").textrotator();
});

function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
  console.log("Ok");
});
