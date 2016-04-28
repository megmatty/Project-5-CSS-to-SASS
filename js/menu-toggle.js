//HAMBURGER MENU

$("#nav").addClass("js").before('<div id="menu">&#9776;</div>');
$("#nav").hide();
$("#menu").click(function(){
	$("#nav").slideToggle();
});
$("#nav a").click(function() {
    if(window.innerWidth < 768) {
        $("#nav").slideUp();
    }
});

function resizer(){
	if(window.innerWidth > 767) {
		$("#nav").css("display", "flex").show();
		$("#menu").hide();
	} else {
	    $("#nav").css("display", "block").hide();
	    $("#menu").show();
	}
};

//on ready as well as on resize
$(window).ready(resizer).resize(resizer);