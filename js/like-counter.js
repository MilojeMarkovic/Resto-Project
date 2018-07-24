
var incrementPlus;

var buttonPlus  = $(".heart-img");

var incrementPlus = buttonPlus.click(function() {
	var $n = $(this)
		.parent(".small-food__paragraph-sub")
		.parent(".small-food")
		.find(".qty");
	$n.val(Number($n.val())+1 );
});
