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
		console.log($(this).attr("class")[8],$(this).attr("class")[9] );
		var i=Number($(this).attr("class")[8])+1;
		var j=Number($(this).attr("class")[9])+1;
		$("#"+(i+j)).addClass("vert");
	});

	$('[class^="pionBlanc"]').on("mouseover", function(){ 
		console.log($(this).attr("class")[8],$(this).attr("class")[9] );
		$(this).addClass("rouge");
		var i=Number($(this).attr("class")[9])+1;
		var j=Number($(this).attr("class")[10])+1;
		$("#"+(i+j)).addClass("rouge");

	});

	$('[class^="pionNoir"]').on("mouseout", function(){ 
		$(this).removeClass("vert");
		var i=Number($(this).attr("class")[8])+1;
		var j=Number($(this).attr("class")[9])+1;
		$("#"+(i+j)).removeClass("vert");
	});

	$('[class^="pionBlanc"]').on("mouseout", function(){ 
		$(this).removeClass("rouge");
		var i=Number($(this).attr("class")[9])+1;
		var j=Number($(this).attr("class")[10])+1;
		$("#"+(i+j)).removeClass("rouge");
	});


});