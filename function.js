		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		var ballRadius = 10;
		var x = canvas.width/2;
		var y = canvas.height-30;
		var dx = 2;
		var dy = -2;
		var speed = 5;

		function drawLine() 
		{
        	ctx.strokeStyle = "blue";
			ctx.beginPath();

			ctx.moveTo(0,0);
			ctx.lineTo(400,0);

			ctx.moveTo(400,0);
			ctx.lineTo(400,300);

			ctx.moveTo(400,300);
			ctx.lineTo(0,300);

			ctx.moveTo(0,300);
			ctx.lineTo(0,0);

			ctx.lineWidth = 5;
			ctx.closePath();
			ctx.stroke(); 
		}

		function changeSpeed(value) 
		{
			speed = value;
			clearInterval(myInterval);
			myInterval = setInterval(draw, speed);
		}

		function drawBall()
		{
    		ctx.beginPath();
    		ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    		ctx.fill();
    		ctx.closePath();
		}

		function drawRect()
		{
    		ctx.beginPath();
    		ctx.fillRect(x, y, 30, 30);
    		ctx.fill();
    		ctx.closePath();
		}

		function changeColor()
		{
			if (document.getElementById('moveVector1').checked == true)
			{   
				ctx.fillStyle="red";
			}

	    	else if (document.getElementById('moveVector2').checked == true)
			{
				ctx.fillStyle="yellow";
			}

	    	else if (document.getElementById('moveVector3').checked == true)
			{
				ctx.fillStyle="blue";
			}
		}


		function draw() 
		{	
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			if (document.getElementById('moveVector4').checked == true) 
			{
				drawBall();
			}

			else if (document.getElementById('moveVector5').checked == true)
			{
				drawRect();
			}
			drawLine();

			if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) 
			{
    			
    			dx = -dx;
    			x = x + speed/3;
			}

			if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) 
			{
    			dy = -dy;
    			x = x - speed/3;
			}

			x += dx;
    		y += dy;
		}

		function myFunction() 
		{
			myInterval = setInterval(draw,10);
		}