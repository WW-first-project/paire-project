var count=0;
var count1=0;
      $('.mainAmer').hide();
      $('.mainVolleyball').hide();
      $('.mainSwimming').hide();
      $('.mainMMA').hide();
	  $('.mainBallet').hide();
	  $('.mainCycling').hide();
function showSwim(){
	count++;
	if(count%2 !==0){
		$('.mainSwimming').show();
		$('.mainVolleyball').hide();
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
		$('.mainSwimming').hide()
		$('.mainVolleyball').hide()
		$('.mainAmer').show()
	}
	else if(count%2 === 0){
		$('.mainAmer').hide()
	}
}
function showBallet(){
	count++;
	if(count%2 === 0){
		$('.mainAmer').hide()
		$('.mainSwimming').hide()
		$('.mainVolleyball').hide()
		$('.mainBallet').show()
	}
	else if(count%2 !== 0){
		$('.mainBallet').hide()
	}
}
function showMMA(){
	count++;
	if(count%2 !== 0){
		$('.mainBallet').hide()
		$('.mainAmer').hide()
		$('.mainSwimming').hide()
		$('.mainVolleyball').hide()
		$('.mainMMA').show()
	}
	else if(count%2 === 0){
		$('.mainMMA').hide()
	}
}
function showCycling(){
	count++;
	if(count%2 === 0){
		$('.mainMMA').hide()
		$('.mainBallet').hide()
		$('.mainAmer').hide()
		$('.mainSwimming').hide()
		$('.mainVolleyball').hide()
		$('.mainCycling').show()
	}
	else if(count%2 !== 0){
		$('.mainCycling').hide()
	}
}
