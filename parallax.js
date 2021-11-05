const auto = true;

(function() {
	const elem = document.querySelector("#parallax");
	let canvaswidth = window.innerWidth/2;
	let canvasheight = window.innerHeight/2;

	if(auto){
		let a = 0;

		
		setInterval(function(){
			var x = (canvaswidth)+Math.cos(a)*320.0;
			var y = (canvasheight)+Math.sin(a)*90.0;
			a+=0.01;
			var e = {"clientX":x,"clientY":y}
			parallax(e);
			
		},16.67);
	}else{
		document.addEventListener("mousemove", parallax);
	}
			
	window.addEventListener('resize', function(){
		canvaswidth =  window.innerWidth/2;
		canvasheight = window.innerHeight/2;
	});
	
    function parallax(e) {
		let baseX = 50;
		let baseY = 50;
        let _w = canvaswidth;
        let _h = canvasheight;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${baseX - (_mouseX - _w) * 0.05}% ${baseY - (_mouseY - _h) * -0.025}%`;
        let _depth2 = `${baseX - (_mouseX - _w) * 0.2}% ${baseY - (_mouseY - _h) * -0.1}%`;
        let _depth3 = `${baseX - (_mouseX - _w) * 0.4}% ${baseY - (_mouseY - _h) * -0.2}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();
