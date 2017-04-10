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
		var k=Number($(this).attr("class")[10]);

	
		if(k==0){


			//j=Number($(this).attr("class")[11]);
			if (($("#"+(i+1)+"9").children().length<1)){
				$("#"+(i+1)+"9").addClass("vert");
			}
			


			$('#'+i+"10").addClass("vert");
		}else if (j==1){


			if (($("#"+(i+1)+""+(j+1)).children().length<1)){
				$("#"+(i+1)+""+(j+1)).addClass("vert");
			}
			if (($("#"+(i+1)+""+(j-1)).children().length<1)){
				$("#"+(i+1)+""+(j-1)).addClass("vert");
			}
			
			$('#'+i+''+j).addClass("vert");

		}else if (i==1){


			$("#"+i+j).addClass("vert");
			if (($("#"+(i+1)+''+(j+1)).children().length<1)){
				$("#"+(i+1)+''+(j+1)).addClass("vert");
			}
			if (($("#"+(i+1)+''+(j-1)).children().length<1)){
				$("#"+(i+1)+''+(j1)).addClass("vert");
			}
		} else {


			if (($("#"+(i+1)+""+(j+1)).children().length<1)){
				$("#"+(i+1)+""+(j+1)).addClass("vert");
			}
			if (($("#"+(i+1)+""+(j-1)).children().length<1)){
				$("#"+(i+1)+""+(j-1)).addClass("vert");
			}


			$("#"+(i)+""+(j)).addClass("vert");

		}
	});

	$('[class^="pionBlanc"]').on("mouseover", function(){ 
		var i=Number($(this).attr("class")[9]);			
		var j=Number($(this).attr("class")[10]);
		var k=Number($(this).attr("class")[11]);


	
		if (k==0){


			if (($("#"+(i-1)+"9").children().length<1)){
				$("#"+(i-1)+"9").addClass("rouge");
			}
			
			$('#'+i+''+j+'0').addClass("rouge");

		}else if(j==1){



			j=Number($(this).attr("class")[11]);
			if (($("#"+"9"+(j-1)).children().length<1)){
				$("#"+"9"+(j-1)).addClass("rouge");
			}
			
			if (($("#"+"9"+(j+1)).children().length<1)){
				$("#"+"9"+(j+1)).addClass("rouge");
			}


			$('#'+i+'1').addClass("rouge");
		}else if (j==0 && k%2!=0){



			$("#"+"10"+k).addClass("rouge");
			if (($("#"+"9"+(k-1)).children().length<1)){
				$("#"+"9"+(k-1)).addClass("rouge");
			}
			if (($("#"+"9"+(k+1)).children().length<1)){
				$("#"+"9"+(k+1)).addClass("rouge");
			}
		} else {



			if (($("#"+(i-1)+""+(j+1)).children().length<1)){
				$("#"+(i-1)+""+(j+1)).addClass("rouge");
			}
			if (($("#"+(i-1)+""+(j-1)).children().length<1)){
				$("#"+(i-1)+""+(j-1)).addClass("rouge");
			}


			$("#"+(i)+""+(j)).addClass("rouge");

		}

	});

	$('[class^="pionNoir"]').on("mouseout", function(){ 
		var i=Number($(this).attr("class")[8]);			
		var j=Number($(this).attr("class")[9]);
		var k=Number($(this).attr("class")[10]);

	
		if(k==0){

			if (($("#"+(i+1)+"9").children().length<1)){
				$("#"+(i+1)+"9").removeClass("vert");
			}
			


			$('#'+i+"10").removeClass("vert");
		}else if (j==1){


			if (($("#"+(i+1)+""+(j+1)).children().length<1)){
				$("#"+(i+1)+""+(j+1)).removeClass("vert");
			}
			if (($("#"+(i+1)+""+(j-1)).children().length<1)){
				$("#"+(i+1)+""+(j-1)).removeClass("vert");
			}
			
			$('#'+i+''+j).removeClass("vert");

		}else if (i==1){



			$("#"+i+j).removeClass("vert");
			if (($("#"+(i+1)+''+(j+1)).children().length<1)){
				$("#"+(i+1)+''+(j+1)).removeClass("vert");
			}
			if (($("#"+(i+1)+''+(j-1)).children().length<1)){
				$("#"+(i+1)+''+(j-1)).removeClass("vert");
			}
		} else {


			if (($("#"+(i+1)+""+(j+1)).children().length<1)){
				$("#"+(i+1)+""+(j+1)).removeClass("vert");
			}
			if (($("#"+(i+1)+""+(j-1)).children().length<1)){
				$("#"+(i+1)+""+(j-1)).removeClass("vert");
			}


			$("#"+(i)+""+(j)).removeClass("vert");

		}
	});

	$('[class^="pionBlanc"]').on("mouseout", function(){ 
		var i=Number($(this).attr("class")[9]);			
		var j=Number($(this).attr("class")[10]);
		var k=Number($(this).attr("class")[11]);
	
		if (k==0){

			if (($("#"+(i-1)+"9").children().length<1)){
				$("#"+(i-1)+"9").removeClass("rouge");
			}
			
			$('#'+i+''+j+'0').removeClass("rouge");

		}else if(j==1){

			j=Number($(this).attr("class")[11]);
			if (($("#"+"9"+(j-1)).children().length<1)){
				$("#"+"9"+(j-1)).removeClass("rouge");
			}
			
			if (($("#"+"9"+(j+1)).children().length<1)){
				$("#"+"9"+(j+1)).removeClass("rouge");
			}


			$('#'+i+'1').removeClass("rouge");
		}else if (j==0 && k%2!=0){

			$("#"+"10"+k).removeClass("rouge");
			if (($("#"+"9"+(k-1)).children().length<1)){
				$("#"+"9"+(k-1)).removeClass("rouge");
			}
			if (($("#"+"9"+(k+1)).children().length<1)){
				$("#"+"9"+(k+1)).removeClass("rouge");
			}
		} else {

			if (($("#"+(i-1)+""+(j+1)).children().length<1)){
				$("#"+(i-1)+""+(j+1)).removeClass("rouge");
			}
			if (($("#"+(i-1)+""+(j-1)).children().length<1)){
				$("#"+(i-1)+""+(j-1)).removeClass("rouge");
			}


			$("#"+(i)+""+(j)).removeClass("rouge");

		}


	});


	$('[class^="pionNoir"]').on("click", function(){ 
		$(this).parent().removeClass("vert");
		//$('[class^="vertLock"]').removeClass("vertLock");
		$('[class^="selected"]').removeClass("selected");;
		$(this).parent().addClass("selected");
		
		var i=Number($(this).attr("class")[8]);			
		var j=Number($(this).attr("class")[9]);
		var k=Number($(this).attr("class")[10]);



	
		if(k==0){

			if (($("#"+(i+1)+"9").children().length<1)){
				$("#"+(i+1)+"9").addClass("vertLock");
			}
			

		}else if (j==1){


			if (($("#"+(i+1)+""+(j+1)).children().length<1)){
				$("#"+(i+1)+""+(j+1)).addClass("vertLock");
			}
			if (($("#"+(i+1)+""+(j-1)).children().length<1)){
				$("#"+(i+1)+""+(j-1)).addClass("vertLock");
			}

		}else if (i==1){


			if (($("#"+(i+1)+''+(j+1)).children().length<1)){
				$("#"+(i+1)+''+(j+1)).addClass("vertLock");
			}
			if (($("#"+(i+1)+''+(j-1)).children().length<1)){
				$("#"+(i+1)+''+(j-1)).addClass("vertLock");
			}
		} else {


			if (($("#"+(i+1)+""+(j+1)).children().length<1)){
				$("#"+(i+1)+""+(j+1)).addClass("vertLock");
			}
			if (($("#"+(i+1)+""+(j-1)).children().length<1)){
				$("#"+(i+1)+""+(j-1)).addClass("vertLock");
			}
		}

		
		
	});
	
	$('[class^="vertLock"]').on("mouseover", function(){ 
		console.log("yes");
		$(this).parent().addClass('[class^="pionNoir"]');
	});

	$('[class^="pionBlanc"]').on("click", function(){ 

		$(this).parent().removeClass("rouge");
		//$('[class^="vertLock"]').removeClass("vertLock");
		$('[class^="selected"]').removeClass("selected");;
		$(this).parent().addClass("selected");
		
		var i=Number($(this).attr("class")[9]);			
		var j=Number($(this).attr("class")[10]);
		var k=Number($(this).attr("class")[11]);


	
		if (k==0){


			if (($("#"+(i-1)+"9").children().length<1)){
				$("#"+(i-1)+"9").addClass("rougeLock");
			}
			
			$('#'+i+''+j+'0').addClass("rougeLock");

		}else if(j==1){



			j=Number($(this).attr("class")[11]);
			if (($("#"+"9"+(j-1)).children().length<1)){
				$("#"+"9"+(j-1)).addClass("rougeLock");
			}
			
			if (($("#"+"9"+(j+1)).children().length<1)){
				$("#"+"9"+(j+1)).addClass("rougeLock");
			}


			$('#'+i+'1').addClass("rougeLock");
		}else if (j==0 && k%2!=0){



			$("#"+"10"+k).addClass("rougeLock");
			if (($("#"+"9"+(k-1)).children().length<1)){
				$("#"+"9"+(k-1)).addClass("rougeLock");
			}
			if (($("#"+"9"+(k+1)).children().length<1)){
				$("#"+"9"+(k+1)).addClass("rougeLock");
			}
		} else {



			if (($("#"+(i-1)+""+(j+1)).children().length<1)){
				$("#"+(i-1)+""+(j+1)).addClass("rougeLock");
			}
			if (($("#"+(i-1)+""+(j-1)).children().length<1)){
				$("#"+(i-1)+""+(j-1)).addClass("rougeLock");
			}


			$("#"+(i)+""+(j)).addClass("rougeLock");

		}
		
	});

	
});