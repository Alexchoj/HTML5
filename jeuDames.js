$(document).ready(function(){

	var plateau = "<table>"; 
	var html = "<table class=plateau>";
	for(var i=0; i<10; i++){
		html += "<tr>";
		for(var j=0; j<10; j++){
			if((i+j)%2 == 0){
				html += "<td class=beige id="+(i+1)+(j+1)+">";
			}else{
				html += "<td class=marron id="+(i+1)+(j+1)+">";
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
		
		var i=Number($(this).attr("class")[8]);
		var j=Number($(this).attr("class")[9]);
		if (($("#"+(i+1)+""+(j+1)).attr("class")!='["pion"]')){
			$("#"+(i+1)+""+(j+1)).addClass("vert");
		}
		$("#"+(i+1)+""+(j-1)).addClass("vert");
	});

	$('[class^="pionBlanc"]').on("mouseover", function(){ 
		$(this).addClass("vert");
		var i=Number($(this).attr("class")[9]);
		var j=Number($(this).attr("class")[10]);
		$("#"+(i-1)+""+(j+1)).addClass("vert");
		$("#"+(i-1)+""+(j-1)).addClass("vert");
	});

	$('[class^="pionNoir"]').on("mouseout", function(){ 
		$(this).removeClass("vert");
		var i=Number($(this).attr("class")[8]);
		var j=Number($(this).attr("class")[9]);
		$("#"+(i+1)+""+(j+1)).removeClass("vert");
		$("#"+(i+1)+""+(j-1)).removeClass("vert");
	});

	$('[class^="pionBlanc"]').on("mouseout", function(){ 
		$(this).removeClass("vert");
		var i=Number($(this).attr("class")[9]);
		var j=Number($(this).attr("class")[10]);
		$("#"+(i-1)+""+(j+1)).removeClass("vert");
		$("#"+(i-1)+""+(j-1)).removeClass("vert");
	});


});