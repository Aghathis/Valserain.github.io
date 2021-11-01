var gradienttransitionvar = {
	t:0,
	loop:undefined,
	wait:0
}



function gradlerp(a,b,t){
	function lerp(a,b,t){
		return Math.floor((1-t)*a+t*b)
	}
	return {
		c:[
			{r:lerp(a.c[0].r,b.c[0].r,t),g:lerp(a.c[0].g,b.c[0].g,t),b:lerp(a.c[0].b,b.c[0].b,t)},
			{r:lerp(a.c[1].r,b.c[1].r,t),g:lerp(a.c[1].g,b.c[1].g,t),b:lerp(a.c[1].b,b.c[1].b,t)},
		],
		deg:lerp(a.deg,b.deg,t)
	}
}

function gradientTransition(id,grad1, grad2, duration){
	if(grad1==grad2) return;
	clearInterval(gradienttransitionvar.loop);
	gradienttransitionvar.t = 0;
	gradienttransitionvar.wait = 1/(duration/10)
	
	gradienttransitionvar.loop = setInterval(function(){
		var gradl = gradlerp(grad1,grad2,gradienttransitionvar.t);
		$(id).css({
			background:"linear-gradient("+gradl.deg+"deg,rgba("+gradl.c[0].r+","+gradl.c[0].g+","+gradl.c[0].b+",1) 0%, rgba("+gradl.c[1].r+","+gradl.c[1].g+","+gradl.c[1].b+",1) 100%)"
		});		
		gradienttransitionvar.t+=gradienttransitionvar.wait;	
		if(gradienttransitionvar.t>=1){
			clearInterval(gradienttransitionvar.loop);
		}
	},10);
}