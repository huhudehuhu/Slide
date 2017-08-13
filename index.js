$(function() {
	//鼠标移入移出显示按钮
	$("#btn1").mouseover(function(){
		$("#btn1").css('opacity','1');
	});
	$("#btn2").mouseover(function(){
		$("#btn2").css('opacity','1');
	});
	$("#btn1").mouseout(function(){
		$("#btn1").css('opacity','0');
	});
	$("#btn2").mouseout(function(){
		$("#btn2").css('opacity','0');
	});
	//鼠标移入移出改变按钮样式
	$('button').mouseover(function() {
		$('button').addClass('onBtn');
	});
	$('button').mouseout(function() {
		$('button').removeClass('onBtn');
	});
	//当前图片缩小的同时被覆盖
	function leftf(start,end,ele){ 
        var tt=setInterval(function (){
            start+=25;
            ele.style.left=start+"px";        
            if(end==start){
                clearInterval(tt)
            }
        },15)
    };
    function rightf(start,end,ele){ 
        var tt=setInterval(function (){
            start+=25;
            ele.style.right=start+"px";
            if(start==end){
                clearInterval(tt)
            }
        },15)
    };
	var tt=null;
    var kkk;
    var n=0;
    var timer=0;
    var lr=null;
    
        //标签个数
        var li = document.getElementById("num").getElementsByTagName("li");
        //图片个数
        kkk = document.getElementsByTagName("img");

        for(var j=0;j<li.length;j++){
            li[j].onmouseover=function (){
                var that = this;
                tt=setTimeout(function(){ 
                var index=that.innerHTML-1;
                n=index;
                if(index < kkk.length){
					for(var o=0;o<li.length;o++){
						li[o].className="";
						kkk[o].className="center";
						//kkk[o].style.opacity=0;
						kkk[o].style.zIndex=9996;
						kkk[o].style.transform='scale(1)';
						kkk[o].style.transition="all 2s ease-in";
                    }

					that.className="on";
					kkk[index].style.opacity=1;
					kkk[index].style.zIndex=9998;
					kkk[index].style.transition="opacity 0.01s";
					kkk[index].style.transform='scale(1.3)';
					
					if (lr=='left') {
						if (index!=3) {
                    		kkk[index+1].style.zIndex=9997;
                    	}
                    	else{
                    		kkk[0].style.zIndex=9997;
                    		kkk[0].className="center";
                    	}
						
                        leftf(-1000,0,kkk[index]);

                    }
                    else if(lr=='right'){
                    	
                    	if (index!=0) {
                    		kkk[index-1].style.zIndex=9997;
                    	}
                    	else{
                    		kkk[0].style.zIndex=9997;
                    		kkk[0].className="center";
                    	}
                    	
                        rightf(-1000,0,kkk[index]);
                        
                    }

                }
            },100);
        };
            li[j].onmouseout=function(){
                clearTimeout(tt);
            };
        };

        var left=document.getElementById("left");
        var right=document.getElementById("right");      
        var body=document.getElementById("picture");

        
        left.onclick=function(){
            if(n>0){
                n=n-1;
            }else if(n==0){
                n=kkk.length-1;
            }
            var li=document.getElementById("num").getElementsByTagName("li");
            lr = 'left';    
            li[n].onmouseover();
        };
        right.onclick=function(){
            n=n>=(kkk.length-1)?0:++n;
            var li=document.getElementById("num").getElementsByTagName("li");
            lr = 'right';
            li[n].onmouseover();
        }
    

    ;
});
