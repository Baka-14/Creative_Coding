const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080,1080],
  //for higher pixel density 
  pixelsPerInch:300

};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height); 
    context.strokeStyle = "white";
    context.lineWidth=width*0.01; 

    const w=width*0.10;
    const h=height*0.10;
    const gap=width*0.03; 

    const ix=100;
    const iy=100;

    const off=width*0.02;

    let x,y;

      for(let i=0;i<5;i++){ 
                //for more rows we have another loop 
          for(let j=0;j<5;j++){ 
                    //x and y are getting updated in each iteration to change position 
                x=ix+(w+gap)*i;
                y=iy+(h+gap)*j; 

                context.beginPath();
                context.rect(x,y,w,h);
                context.stroke(); 

                  if(Math.random()>0.5){ 
                      context.beginPath();
                      context.rect(x+off/2,y+off/2,w-off,h-off);
                      context.stroke();
                    }
                    
                }
            }
  };
};

canvasSketch(sketch, settings); 


