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
			case 0 : if ((i+j)%2 !=0) document.write('<img id="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="43px" width="43px">'); break ; 
			case 1 : if ((i+j)%2 !=0) document.write('<img id="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="43px" width="43px">'); break ; 
			case 2 : if ((i+j)%2 !=0) document.write('<img id="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="43px" width="43px">'); break ; 
			case 3 : if ((i+j)%2 !=0) document.write('<img id="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="43px" width="43px">'); break ; 
			case 3 : if ((i+j)%2 !=0) document.write('<img id="pionNoir'+(i+1)+(j+1)+'" src="pionNoir.png" height="43px" width="43px">'); break ; 
			case 6 : if ((i+j)%2 !=0) document.write('<img id="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="43px" width="43px">'); break ; 
			case 7 : if ((i+j)%2 !=0) document.write('<img id="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="43px" width="43px">'); break ;
			case 8 : if ((i+j)%2 !=0) document.write('<img id="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="43px" width="43px">'); break ; 
			case 9 : if ((i+j)%2 !=0) document.write('<img id="pionBlanc'+(i+1)+(j+1)+'" src="pionBlanc.png" height="43px" width="43px">'); break ;  
		}
		
	}
}


document.write("</table>"); 

$([class^="pionNoir"]).on("mouseover", function(){ 
	$(this).addClass("rouge");
});


//à faire 
//gestion du clic et du déplacement et voilà c fini