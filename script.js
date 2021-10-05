$(document).ready(function (){
ajaxMethod();
});

 function getJsonMethod() {$.getJSON("team.json",function (data){

	 console.log(data);
		var teammembers_data='';
        $.each(data.teammembers,function (index,value){
            teammembers_data+='<h3>'+value.name +'</h3>';
			teammembers_data+= '<h4>'+ value.title +'</h4>';
			teammembers_data+='<p>' + value.bio + '</p>';
			$('div#team').append(teammembers_data);
			teammembers_data='';
        });
		
 });}
	
	
	
	function ajaxMethod(){$.ajax({
		url:'team.json',
		type:'GET',
		beforeSend:function () {
			$('div#team').html("<h1>Loading..</h1>");
		},
		success:function(data){
			var teammembers_data='';

			  $.each(data.teammembers,function (index,value){
            teammembers_data+='<h3>'+value.name +'</h3>';
			teammembers_data+= '<h4>'+ value.title +'</h4>';
			teammembers_data+='<p>' + value.bio + '</p>';
			$('div#team').append(teammembers_data);
			teammembers_data='';
        });
		},
		timeout: 5000,
		error:function(){
			alert("an error occurred");
		},
		complete:function () {
			$('h1').css("display","none");
		}

	});}