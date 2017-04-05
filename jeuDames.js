document.write("<table>"); 
for (var i=0 ; i<10 ; i++) {
	document.write("<tr>"); 
	for (var j=0 ; j<10 ; j++) {
		document.write('<td id=cell-c'+j+'-l'+i+'>'); 
		if ((i+j)%2 !=0){
			document.getElementById('cell-c'+j+'-l'+i).className = 'noir';
		}
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
		
	}
}


document.write("</table>"); 


$('[class^="pionNoir"]').on("click", function(){ 
	$(this).addClass("vert");

});

$('[class^="pionBlanc"]').on("click", function(){ 
	$(this).addClass("rouge");
});

/*$([class^="pionNoir"]).on("mouseover", function(){ 
	$(this).addClass("rouge");
});*/

