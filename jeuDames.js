$(document).ready(function(){

	var plateau = "<table>"; 
	var html = "<table class=plateau>";
	for(var i=0; i<10; i++){
		html += "<tr>";
		for(var j=0; j<10; j++){
			if((i+j)%2 == 0){
				html += "<td class=beige id="+(i+j)+">";
			}else{
				html += "<td class=marron id="+(i+j)+">";
				if(i<4){
					html += "<img class=pionNoir"+(i+1)+(j+1)+" src=pionNoir.png></td>";
				}else if(i>5){
					html += "<img class=pionBlanc"+(i+1)+(j+1)+" src=pionBlanc.png></td>";
				}	
			}
		}
		html += "</tr>";
	}
	html += "</tr>";
	html += "</table>";

	$("#plateau").append(html);

	$('[class^="pionNoir"]').on("mouseover", function(){ 
		$(this).addClass("vert");
		console.log($(this).attr("class")[8]);
		console.log($(this).attr("class")[9]);
		$('[class^="pionNoir'+($(this).attr("class")[8]+1)+($(this).attr("class")[9]+1)+'"').addClass("vert");
	});

	$('[class^="pionBlanc"]').on("mouseover", function(){ 
		$(this).addClass("vert");
	});

	$('[class^="pionNoir"]').on("mouseout", function(){ 
		$(this).removeClass("vert");
	});

	$('[class^="pionBlanc"]').on("mouseout", function(){ 
		$(this).removeClass("vert");
	});


});