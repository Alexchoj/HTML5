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
			case 0 : document.write('<img id="pionNoir" src="pionNoir.png">'); break ; 
			case 1 : document.write('<img id="pionNoir" src="pionNoir.png">'); break ; 
			case 2 : document.write('<img id="pionNoir" src="pionNoir.png">'); break ; 
			case 3 : document.write('<img id="pionNoir" src="pionNoir.png">'); break ; 
			case 6 : document.write('<img id="pionBlanc" src="pionBlanc.png">'); break ; 
			case 7 : document.write('<img id="pionBlanc" src="pionBlanc.png">'); break ;
			case 8 : document.write('<img id="pionBlanc" src="pionBlanc.png">'); break ; 
			case 9 : document.write('<img id="pionBlanc" src="pionBlanc.png">'); break ;  
		}
	}
}
document.write("</table>"); 

