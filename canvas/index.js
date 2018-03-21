// var ctx=can.getContext('2d')
draw();

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d')

        translateDemo();
        function rotateDemo(){
            ctx.translate(75,75)
        }

        function translateDemo(){
            ctx.fillRect(0, 0, 300, 300);
            // ctx.save();
            // ctx.strokeStyle = "#9CFF00";
            ctx.translate(75,75);
            ctx.beginPath();
            ctx.arc(0,0,60,0,Math.PI*2,true);
            ctx.clip();

            // draw background
            var lingrad = ctx.createLinearGradient(0,-75,0,75);
            lingrad.addColorStop(0, '#232256');
            lingrad.addColorStop(1, '#143778');

            ctx.fillStyle = lingrad;
            ctx.fillRect(-75,-75,150,150);

            for(var j=1;j<50;j++) {
                ctx.save();
                ctx.fillStyle = '#fff';
                ctx.translate(75 - Math.floor(Math.random() * 150), 75 - Math.floor(Math.random() * 150));
                drawStar(ctx, Math.floor(Math.random() * 4) + 2);
                ctx.restore();
            }

            function drawStar(ctx,r) {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(r,0);
                for(var i=0;i<9;i++) {
                    ctx.rotate(Math.PI / 5);
                    if(i%2==0) {
                        ctx.lineTo((r / 0.525731) * 0.200811, 0);
                    }else{
                        ctx.lineTo(r, 0);
                    }
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            }

            // drawSpirograph(ctx, 20 * (0 + 2) / (0 + 1), -8 * (0 + 3) / (0 + 1), 10);
            // ctx.scale(4,4)
            // ctx.translate(0 , 0 );
            // drawSpirograph(ctx, 20 * (1 + 2) / (1 + 1), -8 * (0 + 3) / (0 + 1), 10);

            // for (var i = 0; i < 3; i++) {
            //     for (var j = 0; j < 3; j++) {
            //         ctx.save();
            //         ctx.strokeStyle = "#9CFF00";
            //         ctx.translate(50 , 50 );
            //         // ctx.restore();
            //     }
            // }
        }

        function drawSpirograph(ctx, R, r, O) {
            var x1 = R - O;
            var y1 = 0;
            var i = 1;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            do {
                if (i > 20000) break;
                var x2 = (R + r) * Math.cos(i * Math.PI / 72) - (r + O) * Math.cos(((R + r) / r) * (i * Math.PI / 72))
                var y2 = (R + r) * Math.sin(i * Math.PI / 72) - (r + O) * Math.sin(((R + r) / r) * (i * Math.PI / 72))
                ctx.lineTo(x2, y2);
                x1 = x2;
                y1 = y2;
                i++;
            } while (x2 != R - O && y2 != 0);
            ctx.stroke();
        }
    } else {
        alert('sorry,your browser do not support canvas!')
    }
}


