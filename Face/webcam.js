    //var localMediaStream = null;
    //https://trackingjs.com/

	window.onload = function() {
		var video = document.getElementById('video');
		var canvas = document.getElementById('canvas');
		var context = canvas.getContext('2d');
		canvas2 = document.getElementById('canvas2');
		context2 = canvas2.getContext('2d');

		var tracker = new tracking.ObjectTracker('face');
		tracker.setInitialScale(4);
		tracker.setStepSize(2);
		tracker.setEdgesDensity(0.1);

		/*tracker.setInitialScale(5);
		tracker.setStepSize(1);
		tracker.setEdgesDensity(0.17);*/

      	tracking.track('#video', tracker, { camera: true });

		tracker.on('track', function(event) {
			context.clearRect(0, 0, canvas.width, canvas.height);
			var faceDetec = false;
			//console.log("faceDetec: "+faceDetec);

			event.data.forEach(function(rect) {
				//console.log("faceDetec2: "+faceDetec);
				faceDetec = true;
				context.strokeStyle = '#ff0003';
				context.strokeRect(rect.x, rect.y, rect.width, rect.height);
				context.font = '11px Helvetica';
				context.fillStyle = "#fff";
				context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
				context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
			});
			if(faceDetec){

				$('#captura').removeAttr('disabled');
				//$('#upload').removeAttr('disabled');  
			}else{
				$('#captura').attr("disabled", "disabled");
				//$('#upload').attr("disabled", "disabled");
			}				
		});

		/*tracker.on('track', function(event) {

        context.clearRect(0,0,canvas.width, canvas.height);

        if(!event.data) return;

          event.data.faces.forEach(function(rect) {
            context.strokeStyle = '#a64ceb';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
          });

          event.data.landmarks.forEach(function(landmarks) {
            for(var l in landmarks){
              context.beginPath();
              context.fillStyle = "#fff"
              context.arc(landmarks[l][0],landmarks[l][1],1,0,2*Math.PI);
              context.fill();
            }
          });

      });*/

      /*var gui = new dat.GUI();
      gui.add(tracker, 'edgesDensity', 0.1, 0.5).step(0.01);
      gui.add(tracker, 'initialScale', 1.0, 10.0).step(0.1);
      gui.add(tracker, 'stepSize', 1, 5).step(0.1);*/
    };

function snapshot() {

	//context2.drawImage(video, 0, 0);
	context2.drawImage(video, 0, 0, 410, 320);
		
}

function upload(){
	/*$.post({
		data: {
		// Manda a imagem em base 64
		base64: canvas.toDataURL()
		},
		// O arquivo .php com a função citada
		url: "addimage.php"
	});*/
	// Manda a imagem em base 64
	$.post("addimage.php",{base64: canvas2.toDataURL()},function(data){
		//console.log(data);
		//alert(data);
		//console.log(canvas2.toDataURL());
		$("#resultado").html(data);
		//$("#base64").html(canvas2.toDataURL());
		//console.log(canvas.toDataURL());
		
	});
}