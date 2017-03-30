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
				case 6 : if ((i+j)%2 !=0) plateau += '<img id="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="43px" width="43px">'; break ; 
				case 7 : if ((i+j)%2 !=0) plateau += '<img id="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="43px" width="43px">'; break ;
				case 8 : if ((i+j)%2 !=0) plateau += '<img id="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="43px" width="43px">'; break ; 
				case 9 : if ((i+j)%2 !=0) plateau += '<img id="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="43px" width="43px">'; break ;  
			}
			
		}
	}


	plateau += "</table>"; 
	$('h1').append(plateau);

	$(".noir").on("mouseover", function(){ 
		console.log("yo");
		$(this).addClass("rouge");
	});

	/*$([class^="pionNoir"]).on("mouseover", function(){ 
		$(this).addClass("rouge");
	});*/



});