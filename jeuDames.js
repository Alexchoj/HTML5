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
	}
	html += "</tr>";
html += "</table>";

$("#plateau").append(html);

$('[class^="pionNoir"]').on("click", function(){ 
	$(this).addClass("vert");
});

$('[class^="pionBlanc"]').on("click", function(){ 
	$(this).addClass("rouge");
});


$( ".pionNoir" ).draggable({
  axis: "x"
});


$(".pionBlanc").droppable({
	accept : "td"
})

});