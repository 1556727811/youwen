require.config({
	paths : {
		"jquery" : ["js/jquery-3.1.1"],
		"swiper" : ["js/swiper.min"],
		"fullpage" : ["js/jquery.fullPage.min"],
		"WOW" : ["js/wow.min"]
		
	},
	shim : {
		/*"fullpage" : {
			deps : ["jquery"]
		},*/
		"WOW" : {
			deps : ["jquery"]
		},
	}
});


require(["jquery","swiper","fullpage","WOW"],function($) {
	
			/*$("#dowebok").fullpage({
				"scrollBar" : true
			});
			$("html").css("overflow","hidden");	*/
			
			new WOW().init();
			
			//模态框
		$(".mianfei").on("click",function(){
			$(".mtk_all").css("display","block");
			$(".mtk").css("display","block");
			var vW=$(window).width();
			var vH=$(window).height();
			var mW=$(".mtk_all").outerWidth();
			var mH=$(".mtk_all").outerHeight();
			$(".mtk_all").css({'left':(vW-mW)/2+"px",'top':(vH-mH)/2+"px"});
			/*$(".mtk_all").css("top","sv");
			$(".mtk_all").css("left","sv");*/
		});
		
		$(".m_btn").on("click",function(){
			$(".mtk_all").css("display","none");
			$(".mtk").css("display","none");
		});
		
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
		//模态框select
		var se1=$("#selet1").val();
		var se2=$("#selet2");
		var se3=$("#selet3")
		$("#selet1").on("change",function(){
			if($("#selet1").val()==0){
				$("#selet2").empty();
				$("#selet2").append($("<option>").val(0).text("一年级"),
				$("<option>").val(1).text("二年级"),$("<option>").val(2).text("三年级"),
				$("<option>").val(3).text("四年级"),$("<option>").val(4).text("五年级"));
			};
			if($("#selet1").val()==1){
				$("#selet2").empty();
				var option=$("<option>").val(5).text("小升初");
				$("#selet2").append(option);

				$("#selet3").empty();
				$("#selet3").append($("<option>").val(1).text("语文"),
				$("<option>").val(2).text("数学"),$("<option>").val(3).text("英语"));
			};
			if($("#selet1").val()==2){
				$("#selet2").empty();
				$("#selet2").append($("<option>").val(6).text("预初"),
				$("<option>").val(7).text("初一"),$("<option>").val(8).text("初二"),
				$("<option>").val(9).text("初三"));
				
				$("#selet3").empty();
				$("#selet3").append($("<option>").val(1).text("语文"),
				$("<option>").val(2).text("数学"),$("<option>").val(3).text("英语"));
			};
			if($("#selet1").val()==3){
				$("#selet2").empty();
				$("#selet2").append($("<option>").val(10).text("中考冲刺"))
				
				$("#selet3").empty();
				$("#selet3").append($("<option>").val(1).text("语文"),
				$("<option>").val(2).text("数学"),$("<option>").val(3).text("英语"));
			};
			
			if($("#selet1").val()==4){
				$("#selet2").empty();
				$("#selet2").append($("<option>").val(11).text("高一"),$("<option>").val(12).text("高二"),
				$("<option>").val(13).text("高三"));
				
				$("#selet3").empty();
				$("#selet3").append($("<option>").val(1).text("语文"),
				$("<option>").val(2).text("数学"),$("<option>").val(3).text("英语"));
			};
			if($("#selet1").val()==5){
				$("#selet2").empty();
				$("#selet2").append($("<option>").val(15).text("高考冲刺"));
				
				$("#selet3").empty();
				$("#selet3").append($("<option>").val(1).text("语文"),
				$("<option>").val(2).text("数学"),$("<option>").val(3).text("英语"));
			};
		});
		
		
		$(document).on("scroll",function(){
			
			if ($(window).scrollTop() > 90) {
				$("header").css("display","none");
			}else{
				
				$("header").css("display","block");
			}
		});
		
	
});