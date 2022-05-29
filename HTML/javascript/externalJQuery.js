//Accordion
$(document).ready(function(){
	$(function(){
		$("#accordion").accordion();
	});
});

//Theme Switch : Dark / Light
function themeSwitcher() {
	var element = document.getElementById("theme");
	element.classList.toggle("light");
}

//Animation on click
$(function(){
	var animationName = 'animated jello';
	var animationName2 = 'animated rubberBand';
	var animationName3 = 'animated fadeInDown';
	var animationName4 = 'animated fadeInUp';
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd oanimationend animationend';
	
	$('h3').on('click',function(){
		$('h3').addClass(animationName).one(animationEnd, function(){
			$(this).removeClass(animationName);
		});
	});
	
	$('#HSHG').on('click',function(){
		$('#HSHG').addClass(animationName2).one(animationEnd, function(){
			$(this).removeClass(animationName2);
		});
	});
	
	$('#thect').on('click',function(){
		$('#thect').addClass(animationName3).one(animationEnd, function(){
			$(this).removeClass(animationName3);
		});
	});
	
	$('#thect').on('click',function(){
		$('#navigation').addClass(animationName4).one(animationEnd, function(){
			$(this).removeClass(animationName4);
		});
	});
	
	$('#thect').on('click',function(){
		$('#top').addClass(animationName3).one(animationEnd, function(){
			$(this).removeClass(animationName3);
		});
	});
	
	//Component SubMenu on Click
	var i=0,j=0,k=0,l=0,m=0;
	$("#bsecurity").click(function openSec(){
		if(i%2==0){
			$("#txt1Sec").slideToggle(500,function(){
				$("#imgSec").slideToggle(500,function(){
					$("#txt2Sec").slideToggle(500);
				});
			});			
		}else{
			$("#txt2Sec").slideToggle(1000);
			$("#imgSec").slideToggle(1000);
			$("#txt1Sec").slideToggle(1000);
		}
		i++;
	});
	$("#bintercom").click(function openInt(){
		if(j%2==0){
			$("#txt1Int").slideToggle(500,function(){
				$("#imgInt").slideToggle(500,function(){
					$("#txt2Int").slideToggle(500);
				});
			});			
		}else{
			$("#txt2Int").slideToggle(1000);
			$("#imgInt").slideToggle(1000);
			$("#txt1Int").slideToggle(1000);
		}
		j++;
	});
	$("#bvoiceAct").click(function openVoA(){
		if(k%2==0){
			$("#txt1VoA").slideToggle(500,function(){
				$("#imgVoA").slideToggle(500,function(){
					$("#txt2VoA").slideToggle(500);
				});
			});			
		}else{
			$("#txt2VoA").slideToggle(1000);
			$("#imgVoA").slideToggle(1000);
			$("#txt1VoA").slideToggle(1000);
		}
		k++;
	});
	$("#blighting").click(function openLig(){
		if(l%2==0){
			$("#txt1Lig").slideToggle(500,function(){
				$("#imgLig").slideToggle(500,function(){
					$("#txt2Lig").slideToggle(500);
				});
			});			
		}else{
			$("#txt2Lig").slideToggle(1000);
			$("#imgLig").slideToggle(1000);
			$("#txt1Lig").slideToggle(1000);
		}
		l++;
	});
	$("#bventilation").click(function openVen(){
		if(m%2==0){
			$("#txt1Ven").slideToggle(500,function(){
				$("#imgVen").slideToggle(500,function(){
					$("#txt2Ven").slideToggle(500);
				});
			});			
		}else{
			$("#txt2Ven").slideToggle(1000);
			$("#imgVen").slideToggle(1000);
			$("#txt1Ven").slideToggle(1000);
		}
		m++;
	});
	
	//Profiles Image on Click
	var n=0,o=0,p=0;
	$("#imgA").click(function(){
		if(n%2==0){
			$("#gbr1").animate({marginLeft:"-=340px"},500,function(){
				$("#Aristo").toggle(500);
			});
		}else{
			$("#Aristo").toggle(1000);
			$("#gbr1").animate({marginLeft:"+=340px"},500);
		}
		n++;
	});
	$("#imgB").click(function(){
		if(o%2==0){
			$("#gbr2").animate({marginLeft:"-=340px"},500,function(){
				$("#Julian").toggle(500);
			});
		}else{
			$("#Julian").toggle(1000);
			$("#gbr2").animate({marginLeft:"+=340px"},500);
		}
		o++;
	});
	$("#imgC").click(function(){
		if(p%2==0){
			$("#gbr3").animate({marginLeft:"-=340px"},500,function(){
				$("#Jeddi").toggle(500);
			});
		}else{
			$("#Jeddi").toggle(1000);
			$("#gbr3").animate({marginLeft:"+=340px"},500);
		}
		p++;
	});
});