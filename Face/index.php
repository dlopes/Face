
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>eXagon WebCaM Stream</title>
<style>
	/*video#video,canvas#canvas2 {
	    width: 600px;
	    height:400px;
	    border: 3px solid #d3d3d3;

	}
	video#canvas{

	}
	video#video{
	    border: 3px solid #d3d3d3;
	}
	canvas#canvas2 {
	    border: 3px solid #d3d3d3;
	}
	.camera_snap>input[type="button"] {
	    border: none;
	    padding: 1%;
	    width: 37px;
	    color: #fff;
	    transition: 0.1s all;
	}
	.camera_snap>input[type="button"]:active{
	    opacity:0.4;
	    width:30px;
	    background-size: cover;
	    -moz-background-size: cover;
	}*/
	div.demo-frame{
		width: 830px;
		height:330px;
		
	}

    div.demo-container2{
    	float: right;
    	/*background-color: red;*/
    }

	#video, #canvas {
		width: 410px;
	    height:320px;
		border: 3px solid #d3d3d3;
		position: absolute;
	}
	#canvas2 { 
		border: 3px solid #d3d3d3;
		position: relative;
	}

</style>
<script type="text/javascript" src="jquery.js"></script>
<script src="tracking/build/tracking-min.js"></script>
<script src="tracking/build/data/face-min.js"></script>
<script src="tracking/build/Landmarks.js"></script>
<script src="tracking/build/Regressor.js"></script>

<script src="tracking/examples/assets/stats.min.js"></script>





</head>

<body>
	<div class="demo-frame">
		<div class="demo-container">
			<video id="video" width="410" height="320" preload autoplay loop muted></video>
			<canvas id="canvas" width="410" height="320"></canvas>
		</div>
		<div class="demo-container2">
			<canvas id="canvas2" width="410" height="320"></canvas>
		</div>
		<div style="clear: both;"></div>
		<br />
		<button type="button" disabled="true" class="snapbutton" id="captura" name="Captura" onclick="snapshot()">Captura</button>
		<button type="button" class="snapbutton" id="upload" name="Uplaod" onclick="upload()"/>Uplaod</button>
	</div>
	<br />
	<br />
	<br />
	<div id="resultado">
		
	</div>
	<div id="base64">
		
	</div>
    <script type="text/javascript" src="webcam.js"></script>
	
	<?php
	//phpinfo();
	?>

</body>
</html>