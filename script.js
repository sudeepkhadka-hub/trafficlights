function draw(){
    const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.strokeRect(50,50,150,250);
    ctx.strokeRect(75,300,100,150);
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(125, 110, 30, 0, Math.PI * 2, true); 
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    // ctx.moveTo(110, 75);
    
    
    ctx.beginPath();
    ctx.arc(125, 180, 30, 0, Math.PI * 2, true); 
    ctx.fillStyle = "#008000";
    ctx.fill();
    ctx.closePath();
    
    
    ctx.beginPath();
    ctx.arc(125, 250, 30, 0, Math.PI * 2, true); 
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    console.log("test");

}

draw();
