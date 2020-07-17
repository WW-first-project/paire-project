var count=0;
var count1=0;
      $('.mainAmer').hide();
      $('.mainVolleyball').hide();
      $('.mainSwimming').hide();
function showSwim(){
	count++;
	if(count%2 !==0){
		$('.mainSwimming').show();
	}
	else if (count%2===0){
		$('.mainSwimming').hide()
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
	}
}
function showAmer(){
	count++;
	if(count%2 !== 0){
		$('.mainVolleyball').hide()
		$('.mainAmer').show()
	}
	else if(count%2 === 0){
		$('.mainAmer').hide()
	}
}

// function press(){
// 	if(type(storage)!== "undefined"){
// 		if(localstorage.press){
// 			localstorage.press=number(localstorage.press)+1;
// 	 }else {
// 	 	localStorage.press=1;
// 	 }
// 	 document.getElementById("cunt").innerHTML='number of items'+localStorage.press;
// 	}
// }

	var button =document.getElementById("press"),counter=0;
 var x = button.onclick=function(){
	counter ++
	button.innerHTML=+ counter;
}
	
