var count=0;
      $('.mainAmer').hide();
      $('.mainVolleyball').hide();
      $('.mainSwimming').hide();
      $('.mainMMA').hide();
	  $('.mainCycling').hide();
function showSwim(){
	count++;
	if(count%2 !==0){
		$('.mainSwimming').show();
		$('.mainVolleyball').hide();
	}
	else if (count%2===0){
		$('.mainSwimming').hide()
		$('.mainMMA').hide();
	    $('.mainCycling').hide();
	    $('.mainAmer').hide();
        $('.mainVolleyball').hide();
    }
}

function showVoll(){
	count++;
	if(count%2 ===0){
		$('.mainSwimming').hide()
		$('.mainVolleyball').show();
	}
	else if (count%2 !==0){
		$('.mainVolleyball').hide()
		$('.mainSwimming').hide()
		$('.mainMMA').hide();
	    $('.mainCycling').hide();
	    $('.mainAmer').hide();
     
	}
}
function showAmer(){
	count++;
	if(count%2 !== 0){
		$('.mainSwimming').hide()
		$('.mainVolleyball').hide()
		$('.mainAmer').show()
	}
	else if(count%2 === 0){
		$('.mainAmer').hide();
		$('.mainSwimming').hide()
		$('.mainMMA').hide();
	    $('.mainCycling').hide();
        $('.mainVolleyball').hide();
	}
}
function showMMA(){
	count++;
	if(count%2 === 0){
		$('.mainAmer').hide()
		$('.mainSwimming').hide()
		$('.mainVolleyball').hide()
		$('.mainMMA').show()
	}
	else if(count%2 !== 0){
		$('.mainAmer').hide();
		$('.mainSwimming').hide()
		$('.mainMMA').hide();
	    $('.mainCycling').hide();
        $('.mainVolleyball').hide();
    }	
}
function showCycling(){
	count++;
	if(count%2 !== 0){
		$('.mainMMA').hide()
		$('.mainAmer').hide()
		$('.mainSwimming').hide()
		$('.mainVolleyball').hide()
		$('.mainCycling').show()
	}
	else if(count%2 === 0){
	    $('.mainAmer').hide();
		$('.mainSwimming').hide()
		$('.mainMMA').hide();
	    $('.mainCycling').hide();
        $('.mainVolleyball').hide();
	}
}
	counter=0;
  press=function(){
	   counter ++ ;
	document.getElementById("button7").innerHTML='items number : '+ counter;
}
  remove=function(){
	   counter -- ;
	if(counter<0){
		counter =0;
	}
	document.getElementById("button7").innerHTML='items number : '+ counter;
}

	function checkCond() {
		var myName=$('#firstN').val();
		var myNumber=$('#phoneN').val();
		var myLastName=$('#lastN').val();
		if(typeof myName !== "string"){
	 		alert('name invalid, please try again!')
	 	}
		if(typeof myLastName !== "string"){
			alert('LastName invalid, please try again!')
		}
		if(myNumber.length !== 8 || typeof myNumber !== 'number'){
			alert('Confirmed! we will call you upon delivery!')
		}
	}