/*
	WEB 303
	Starting file for Assignment 1 
	Jamila Alsadik
*/

//////////////////-------2-------////////////////////////
$(document).ready(function () {
	$("input").keyup(function () {
		console.log("keyup works");
		let $salary=parseInt($("input#salary").val());
		let $percent=parseInt($("input#percent").val());
		let $spend=($salary*$percent/100);
		$("span#spend").text(`${$spend.toFixed(2)} $`);

    }
	);
});
