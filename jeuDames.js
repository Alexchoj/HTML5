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
<<<<<<< HEAD
=======
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
		}
		
>>>>>>> origin/master
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

<<<<<<< HEAD
=======
$('[class^="pionNoir"]').on("click", function(){ 
	$(this).addClass("vert");

});

$('[class^="pionBlanc"]').on("click", function(){ 
	$(this).addClass("rouge");
});
>>>>>>> origin/master


});