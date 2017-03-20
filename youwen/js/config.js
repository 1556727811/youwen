require.config({
	paths : {
		"jquery" : ["js/jquery-3.1.1"],
		"swiper" : ["js/swiper.min"]
	}
});

require(["jquery","swiper"],function($) {
	
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
    });

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
		
		
		
		
		
		var newH= new Array();
		newH['小学']=['一年级','二年级','三年级', '四年级','五年级'];
		newH['小升初'] = ['小升初'];
		newH['初中'] = ['预初','初一','初二','初三'];
		newH['中考冲刺'] = ['中考冲刺'];
		newH['高中'] = ['高一','高二','高三'];
		newH['高考冲刺'] = ['高考冲刺'];
		
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
		
		/*se1.onchange=function(){
					se2.options.length=0;
					for(var i in newH){
						if(p.value==i){
							for(var j in newH[i]){
								c.add(new Option(newH[i][j],newH[i][j]),null);
							}
						}
					}
				}*/
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
		$(document).on("scroll",function(){
			
			if ($(document).height() - $(window).height() -$(window).scrollTop() == 0) {
//				console.info("快到底部了~~");
				
				$(".fixed").css("bottom","60px");
			}else{
				
				$(".fixed").css("bottom","0");
			}
			
//			console.info($(document).height());
//			console.info($(window).height());
//			console.info($(window).scrollTop());
		});


		$(".nianji ul:nth-child(1) li").on("mouseover",function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		});
		$(".nianji ul:nth-child(2) li").on("mouseover",function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		});
		$(".nianji ul:nth-child(3) li").on("mouseover",function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		});
		$(".nianji ul:nth-child(4) li").on("mouseover",function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		});
		
		$(".w12h5 .sons:nth-child(1)").css("display","block");
		$(".nianji_ul li").mouseover(function(){
		$(this).css("cursor","pointer");
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		var s=$(this).index();
		var n=$(".nianji ul").index();
		
		if(s==0){
			$(".kemu ul:nth-child(1)").css("display","block");
			$(".w12h5 .sons:nth-child(1)").css("display","block");
		}else{$(".kemu ul:nth-child(1)").css("display","none");
			$(".w12h5 .sons:nth-child(1)").css("display","none");}
		if(s==1){
			$(".kemu ul:nth-child(2)").css("display","block");
			$(".w12h5 .sons:nth-child(2)").css("display","block");
		}else{$(".kemu ul:nth-child(2)").css("display","none");
		$(".w12h5 .sons:nth-child(2)").css("display","none");}
		if(s==2){
			$(".kemu ul:nth-child(3)").css("display","block");
			$(".w12h5 .sons:nth-child(3)").css("display","block");
		}else{$(".kemu ul:nth-child(3)").css("display","none");
		$(".w12h5 .sons:nth-child(3)").css("display","none");}
		if(s==3){
			$(".kemu ul:nth-child(4)").css("display","block");
			$(".w12h5 .sons:nth-child(4)").css("display","block");
		}else{$(".kemu ul:nth-child(4)").css("display","none");
		$(".w12h5 .sons:nth-child(4)").css("display","none");}
			
		});
		
//			年级转换

		$(".kemu ul:nth-child(1) li").on("mouseenter",function(){
			var xx=$(".kemu ul:nth-child(1) li");
			var x1=$(".kemu ul:nth-child(1) li:nth-child(1)");
			var boxli=$(this).index();
			$(this).css("cursor","pointer");
			if(boxli==0){
				$(".w12h5 .sons:nth-child(1) .box:nth-child(1)").css("display","block");
			}else{
				$(".w12h5 .sons:nth-child(1) .box:nth-child(1)").css("display","none");
			}
			if(boxli==1){
			$(".w12h5 .sons:nth-child(1) .box:nth-child(2)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(1) .box:nth-child(2)").css("display","none");
			}
			if(boxli==2){
			$(".w12h5 .sons:nth-child(1) .box:nth-child(3)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(1) .box:nth-child(3)").css("display","none");
			}	
		});
		//初中转换
		$(".kemu ul:nth-child(2) li").on("mouseenter",function(){
			var xx=$(".kemu ul:nth-child(2) li");
			var x1=$(".kemu ul:nth-child(2) li:nth-child(1)");
			var boxli=$(this).index();
			$(this).css("cursor","pointer");
			if(boxli==0){
				$(".w12h5 .sons:nth-child(2) .box:nth-child(1)").css("display","block");
				
			}else{
				$(".w12h5 .sons:nth-child(2) .box:nth-child(1)").css("display","none");
			}
			if(boxli==1){
			$(".w12h5 .sons:nth-child(2) .box:nth-child(2)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(2) .box:nth-child(2)").css("display","none");
			}
			if(boxli==2){
			$(".w12h5 .sons:nth-child(2) .box:nth-child(3)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(2) .box:nth-child(3)").css("display","none");
			}	
			if(boxli==3){
			$(".w12h5 .sons:nth-child(2) .box:nth-child(4)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(2) .box:nth-child(4)").css("display","none");
			}
			if(boxli==4){
			$(".w12h5 .sons:nth-child(2) .box:nth-child(5)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(2) .box:nth-child(5)").css("display","none");
			}
		});
		//高中转换
		$(".kemu ul:nth-child(3) li").on("mouseenter",function(){
			var xx=$(".kemu ul:nth-child(3) li");
			var x1=$(".kemu ul:nth-child(3) li:nth-child(1)");
			var boxli=$(this).index();
			$(this).css("cursor","pointer");
			if(boxli==0){
				$(".w12h5 .sons:nth-child(3) .box:nth-child(1)").css("display","block");
				
			}else{
				$(".w12h5 .sons:nth-child(3) .box:nth-child(1)").css("display","none");
			}
			if(boxli==1){
			$(".w12h5 .sons:nth-child(3) .box:nth-child(2)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(3) .box:nth-child(2)").css("display","none");
			}
			if(boxli==2){
			$(".w12h5 .sons:nth-child(3) .box:nth-child(3)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(3) .box:nth-child(3)").css("display","none");
			}	
			if(boxli==3){
			$(".w12h5 .sons:nth-child(3) .box:nth-child(4)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(3) .box:nth-child(4)").css("display","none");
			}
			if(boxli==4){
			$(".w12h5 .sons:nth-child(3) .box:nth-child(5)").css("display","block");
			}else{
			$(".w12h5 .sons:nth-child(3) .box:nth-child(5)").css("display","none");
			}
		});
		//高考冲刺
		$(".kemu ul:nth-child(4) li").on("mouseenter",function(){
			var xx=$(".kemu ul:nth-child(4) li");
			var x1=$(".kemu ul:nth-child(4) li:nth-child(1)");
			var boxli=$(this).index();
			$(this).css("cursor","pointer");
			if(boxli==0){
				$(".w12h5 .sons:nth-child(4) .box:nth-child(1)").css("display","block");
				
			}else{
				$(".w12h5 .sons:nth-child(4) .box:nth-child(1)").css("display","none");
			}
			if(boxli==1){
				$(".w12h5 .sons:nth-child(4) .box:nth-child(2)").css("display","block");
				
			}else{
				$(".w12h5 .sons:nth-child(4) .box:nth-child(2)").css("display","none");
			}
			if(boxli==2){
				$(".w12h5 .sons:nth-child(4) .box:nth-child(3)").css("display","block");
				
			}else{
				$(".w12h5 .sons:nth-child(4) .box:nth-child(3)").css("display","none");
			}
		});
		
		
		
		});


