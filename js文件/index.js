$(window).scroll(function(){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		//console.log(scrollTop);
		var backTop=$("#world").offset().top - $(window).height();
		//console.log(backTop);
		if(scrollTop > backTop){
			$(".a1").addClass("animated bounceInRight show").removeClass("fade");
			$(".a2").addClass("animated bounceInRight show").removeClass("fade");
			$(".a3").addClass("animated bounceInRight show").removeClass("fade");
			$(".a4").addClass("animated bounceInRight show").removeClass("fade");
		}
});