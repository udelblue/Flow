  $.fn.flyoutleft = function(options) {
    var el = this;
	var edge = options.edge || 30;
	var elchild = el.find(">:first-child");
	
	elchild.css("height", "100%");
	elchild.css("margin-right", edge);
	elchild.css("padding-left", "20px");
	
	
    el.css({
        position : "absolute",
        top : "30px",
        left : -1 * (el.width() - edge)
    });
    el.click(function () {
        $(this).animate({left : "0px"}); 
    });
    el.mouseleave(function () {
        $(this).animate({left : -1 * (el.width() - edge) });
    });
}

  $.fn.flyoutright = function(options) {
    var el = this;
	var edge = options.edge || 30;
	var elchild = el.find(">:first-child");
	
	elchild.css("height", "100%");
	elchild.css("margin-left", edge);
	elchild.css("padding-right", "20px");
	
	
    el.css({
        position : "absolute",
        top : "30px",
        right : -1 * (el.width() - edge)
    });
    el.click(function () {
        $(this).animate({right : "0px"}); 
    });
    el.mouseleave(function () {
        $(this).animate({right : -1 * (el.width() - edge) });
    });
}