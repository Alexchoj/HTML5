document.write("<table>"); 
for (var i=0 ; i<8 ; i++) {
	document.write("<tr>"); 
	for (var j=0 ; j<8 ; j++) {
		document.write('<td id=cell-c'+j+'-l'+i+'>'); 
		if ((i+j)%2 !=0){
			document.getElementById('cell-c'+j+'-l'+i).className = 'noir';
		}
	}
}
document.write("</table>"); 

