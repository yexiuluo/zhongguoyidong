
	var win=$(".window")[0];
	var imgs=$("a",win);
	var liss=$("li",win);
	var num=0;  //传入参数
	var t=setInterval(move,1000);
	//移到窗口停止轮播
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
		clearInterval(t)
		t=setInterval(move,1000);
	}

	for (var i = 0; i < imgs.length; i++) {
		liss[i].index=i
		liss[i].onclick=function(){
			//当前页赋值给num
			num=this.index;
			//所有的层级降下去，把当前的层级调高
			for (var i = 0; i < imgs.length; i++) {
				imgs[i].style.zIndex=0;
				liss[i].className="";

			};
			imgs[this.index].style.zIndex=10
		liss[this.index].className="hot22";
		}
	};

function move(){
		num++;//改变当前下标
		if(num==imgs.length){
			num=0
		}
		//所有的层级降下去，把当前的层级调高
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.zIndex=0;
			liss[i].className="";
		};
		imgs[num].style.zIndex=10
		liss[num].className="hot22";
	}

	function getClass(className,range){
	var range= range?range:document;
	    if (range.getElementsByClassName) {
	    	return range.getElementsByClassName(className)
	    }else{
	    	var all=range.getElementsByTagName("*");
	    	var  newArr=[];
	    	for (var i=0;i<all.length;i++){
	    		if (checkClass(all[i],className)) {
	    			newArr.push(all[i])
	    		}
	    	}
	    	return newArr
	    }

}
function checkClass(obj,classname){
	var arrC=obj.className.split(" ")
	for(var i=0;i<arrC.length;i++){
		if (arrC==classname) {
			return true;
		};

	}
	return false;
}

function $(selecter,ranges){
	var ranges=ranges?ranges:document
	var first=selecter.charAt(0);
	if (first=="#") {
	 return	document.getElementById(selecter.substring(1))
	}else if (first==".") {
		return getClass(selecter.substring(1),ranges)
	}else if (/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
	return ranges.getElementsByTagName(selecter)
}

}