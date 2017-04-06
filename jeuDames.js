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
		
		var i=Number($(this).attr("class")[8]);
		var j=Number($(this).attr("class")[9]);

		$('#'+i+''+j).addClass("vert");

		if (($("#"+(i+1)+""+(j+1)).children().length<1)){
			$("#"+(i+1)+""+(j+1)).addClass("vert");
		}
		if (($("#"+(i+1)+""+(j-1)).children().length<1)){
			$("#"+(i+1)+""+(j-1)).addClass("vert");
		}
	});

	$('[class^="pionBlanc"]').on("mouseover", function(){ 
		var i=Number($(this).attr("class")[9]);
		var j=Number($(this).attr("class")[10]);

		$('#'+i+''+j).addClass("rouge");

		if (($("#"+(i-1)+""+(j+1)).children().length<1)){
			$("#"+(i-1)+""+(j+1)).addClass("rouge");
		}
		if (($("#"+(i-1)+""+(j-1)).children().length<1)){
			$("#"+(i-1)+""+(j-1)).addClass("rouge");
		}
	});

	$('[class^="pionNoir"]').on("mouseout", function(){ 
		
		var i=Number($(this).attr("class")[8]);
		var j=Number($(this).attr("class")[9]);

		$('#'+i+''+j).removeClass("vert");

		$("#"+(i+1)+""+(j+1)).removeClass("vert");
		$("#"+(i+1)+""+(j-1)).removeClass("vert");
	});

	$('[class^="pionBlanc"]').on("mouseout", function(){ 
		
		var i=Number($(this).attr("class")[9]);
		var j=Number($(this).attr("class")[10]);

		$('#'+i+''+j).removeClass("rouge");

		$("#"+(i-1)+""+(j+1)).removeClass("rouge");
		$("#"+(i-1)+""+(j-1)).removeClass("rouge");
	});


});