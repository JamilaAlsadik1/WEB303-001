// WEB303 Assignment 2
// Jamila Alsadik

$(document).ready(function(){
    $("a#vprospect").click(function(){
        $("#solution").hide();
        console.log("is click working?");
        $("#solution").load("prospect.html").slideDown("slow");

    });
    $("a#vconvert").click(function(){
        $("#solution").hide();
        console.log("is click working?");
        $("#solution").load("convert.html").slideDown("slow");

    });
    $("a#vretain").click(function(){
        $("#solution").hide();
        console.log("is click working?");
        $("#solution").load("retain.html").slideDown("slow");
    });
});
