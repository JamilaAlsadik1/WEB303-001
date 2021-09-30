$(document).ready(function (){
    $.getJSON("team.json",function (data){
		var teammembers_data='';
        $.each(data.teammembers,function (index,value){
            teammembers_data+='<h3>'+value.name +'</h3>';
			teammembers_data+= '<h4>'+ value.title +'</h4>';
			teammembers_data+='<p>' + value.bio + '</p>';
			$('div#team').append(teammembers_data);
        });
    });
	$.ajax({
		url:'team.json',
		type:'GET',
		beforeSend:function () {
			$('div#team').html("<h1>Loading..</h1>");
		},
		success:function(data){
			var teammembers_data='';

			  $.each(data.teammembers,function (index,value){
				  console.log("executing");
            teammembers_data+='<h3>'+value.name +'</h3>';
			teammembers_data+= '<h4>'+ value.title +'</h4>';
			teammembers_data+='<p>' + value.bio + '</p>';
			$('div#team').append(teammembers_data);
        });
		},
		timeout: 50000,
		error:`an error occurred`,
		complete:function () {
			$('h1').css("display","none");
		}

	});

});

