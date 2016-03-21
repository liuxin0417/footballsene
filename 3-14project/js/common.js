window.onload=function(){
	var scroll
		var wHeight=$(window).height()
			theight=$(".header").height()
			bheight=$(".arti").height()
			fheight=$(".footer").height()
				
		scroll=new iScroll("wrapper",{
			hScrollbar:false,
			vScrollbar:false,
			topOffset:0

		});
		scrollTo(0,0,1)
		$("#wrapper").height(wHeight-theight-bheight-fheight)
        
		scroll.refresh()
		

	$(".artspan1").click(function(){

		$(".scroller1").show()
		$(".scroller1").siblings().hide()
		scroll.refresh()
		
	})
	
	$(".artspan2").click(function(){
		$(".scroller2").show()
		$(".scroller2").siblings().hide()
		scroll.refresh()
		
		
	})
	
	$(".artspan3").click(function(){
		$(".scroller3").show()
		$(".scroller3").siblings().hide()
		scroll.refresh()
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
