require.config({
	paths : {
		"jquery" : ["js/jquery-3.1.1"],
		"swiper" : ["js/swiper.min"],
		"fullpage" : ["js/jquery.fullPage.min"]
		
	},
	shim : {
		"fullpage" : {
			deps : ["jquery"]
		}
	}
});

require(["jquery","swiper","fullpage"],function($) {
	
			$("#dowebok").fullpage({
				"scrollBar" : true
			});
			$("html").css("overflow","hidden");	
			
		//显示二维码
		$(".wx").on("mouseover",function(){
			$(".ew_wx").css("display","block")
		}).on("mouseout",function(){
			$(".ew_wx").css("display","none")
		});
		//backtop
		var sc=$(document);
		var win=$(window);
		$(".top").on("mouseover",function(){
			$(".top").css("background","url(images/gotop.png)")
		}).on("mouseout",function(){
			$(".top").css("background","url(images/backtop.png)")
		});
		//返回顶部
		$(".top").on("click",function goBack(){
			var h = document.documentElement.scrollTop || document.body.scrollTop;
				document.documentElement.scrollTop = 0;
				document.body.scrollTop = 0;
		});
			$(function(){
					var win=$(window);
					var sc=$(document);
				win.scroll(function(){
				if(sc.scrollTop()>=60){
					$("header").css("display","none")
				}else{$("header").css("display","block")}
	 			});
			});
	
});