$(document).ready(function(){
	var plateau = "<table>"; 
	for (var i=0 ; i<10 ; i++) {
		plateau += "<tr>"; 
		for (var j=0 ; j<10 ; j++) {
			plateau +=  '<td id=cell-c'+j+'-l'+i+'>'; 
			if ((i+j)%2 !=0){
				$('#cell-c'+j+'-l'+i).addClass('noir');
			}
			else {
				$('#cell-c'+j+'-l'+i).addClass('blanc');
			}
			switch (i){
				case 0 : if ((i+j)%2 !=0) plateau += '<img id="pionNoir'+(i+1)+(j+1)+'" class=noir src="pionNoir.png" height="43px" width="43px">'; break ; 
				case 1 : if ((i+j)%2 !=0) plateau += '<img id="pionNoir'+(i+1)+(j+1)+'" class=noir src="pionNoir.png" height="43px" width="43px">'; break ; 
				case 2 : if ((i+j)%2 !=0) plateau += '<img id="pionNoir'+(i+1)+(j+1)+'" class=noir src="pionNoir.png" height="43px" width="43px">'; break ; 
				case 3 : if ((i+j)%2 !=0) plateau += '<img id="pionNoir'+(i+1)+(j+1)+'" class=noir src="pionNoir.png" height="43px" width="43px">'; break ; 
				case 6 : if ((i+j)%2 !=0) plateau += '<img id="pionBlanc'+(i+1)+(j+1)+'" class=blanc src="pionBlanc.png" height="43px" width="43px">'; break ; 
				case 7 : if ((i+j)%2 !=0) plateau += '<img id="pionBlanc'+(i+1)+(j+1)+'" class=blanc src="pionBlanc.png" height="43px" width="43px">'; break ;
				case 8 : if ((i+j)%2 !=0) plateau += '<img id="pionBlanc'+(i+1)+(j+1)+'" class=blanc src="pionBlanc.png" height="43px" width="43px">'; break ; 
				case 9 : if ((i+j)%2 !=0) plateau += '<img id="pionBlanc'+(i+1)+(j+1)+'" class=blanc src="pionBlanc.png" height="43px" width="43px">'; break ;  
			}
			
		}/*
		else {
			document.getElementById('cell-c'+j+'-l'+i).className = 'blanc';
		}
		switch (i){
			case 0 : if ((i+j)%2 !=0) document.write('<img class="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="45px" width="45px">'); break ; 
			case 1 : if ((i+j)%2 !=0) document.write('<img class="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="45px" width="45px">'); break ; 
			case 2 : if ((i+j)%2 !=0) document.write('<img class="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="45px" width="45px">'); break ; 
			case 3 : if ((i+j)%2 !=0) document.write('<img class="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="45px" width="45px">'); break ; 
			case 6 : if ((i+j)%2 !=0) document.write('<img class="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="45px" width="45px">'); break ; 
			case 7 : if ((i+j)%2 !=0) document.write('<img class="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="45px" width="45px">'); break ;
			case 8 : if ((i+j)%2 !=0) document.write('<img class="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="45px" width="45px">'); break ; 
			case 9 : if ((i+j)%2 !=0) document.write('<img class="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="45px" width="45px">'); break ;  
		}*/
	}


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
html += "</table>";

$("#plateau").append(html);


	/*
	$(".noir").on("mouseover", function(){ 
		$(this).addClass("vert");
	});

	$(".blanc").on("mouseover", function(){ 
		$(this).addClass("vert");
	});

	$(".noir").on("mouseout", function(){ 
		$(this).removeClass("vert");
	});


	$(".blanc").on("mouseout", function(){ 
		$(this).removeClass("vert");
	});
	*/
	$(".noir").on("mouseover", function(){ 
		console.log("yo");
	 	$(this).addClass("rouge");
 	});
 



$("img").draggable({
	revert: "invalid"
});

$("img").droppable({
	accept : "td"
})

});