$(document).ready(function () {
  var $accordion  = $(".accordion a");
  var $close = $(".close");
  var $accordionParent = $accordion.parent();
  var accordionWidth = $accordionParent.width() + 2;
  console.log(accordionWidth);
  var accordionCount = $accordionParent.length;
  var activeAccordionWidth = (accordionCount - 1) * accordionWidth;

  $accordion.click(function () {
    var $this = $(this);
    var $parent = $this.parent();
    $accordionParent.removeClass("active").css("width", `${accordionWidth}px`);
    $parent
      .addClass("active")
      .css("width", `calc(100% - ${activeAccordionWidth}px)`);
  });

  $close.click(function () {
    var $this = $(this);
    var $parent = $this.parent();
    if ($parent.hasClass("active")) {
      $parent.removeClass("active").css("width", `${accordionWidth}px`);
    } else {
      $accordionParent
        .removeClass("active")
        .css("width", `${accordionWidth}px`);
      $parent
        .toggleClass("active")
        .css("width", `calc(100% - ${activeAccordionWidth}px)`);
    }
  });
});
