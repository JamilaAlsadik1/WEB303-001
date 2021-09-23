// WEB303 Assignment 2
// Jamila Alsadik

$("document").ready(function(){
    $("#vprospect").click(function(){
        var xhttp= new XMLHttpRequest();
        xhttp.onload=function(){
            $("div#solution").Html(this.responseText);
        }
        xhttp.open("GET","prospect.html");
        xhttp.send();

    });
})