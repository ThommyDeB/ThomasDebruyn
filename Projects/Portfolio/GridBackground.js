const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let width, height, particles;
let particleDist = 40;

let mouse = {
    x: undefined,
    y: undefined,
    radius: 100
}

function init(){
    resizeReset();
    animationLoop();
}
function resizeReset(){
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    particles = [];

    for(let y = (((height-particleDist)%particleDist)+particleDist)/2; y < height; y+=particleDist){
        for(let x = (((width-particleDist)%particleDist)+particleDist)/2; x < width; x+=particleDist){
            particles.push(new Particle(x, y));
        }
    }
}

function animationLoop(){
    ctx.clearRect(0, 0, width, height);
    drawScene();
    requestAnimationFrame(animationLoop);
}

function drawScene(){
    for(let i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].draw();
    }
    drawLine();
}

function drawLine(){
    for(let a = 0; a < particles.length; a++){
        for(let b = a+1; b < particles.length; b++){
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let dist = Math.sqrt(dx*dx+dy*dy);
            if(dist < particleDist*1.5){
                opacity = 1 - (dist / (particleDist * 1.5))*1.5;
                ctx.strokeStyle = "rgba(255, 255, 255, " + opacity + ")";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

function mousemove(e){
    mouse.x = e.x;
    mouse.y = e.y;
}
function mouseout(){
    mouse.x = undefined;
    mouse.y = undefined;
}

class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = 4;
        this.baseX = x;
        this.baseY = y;
        this.speed = Math.random()*25+5;
    }
    draw(){
        ctx.fillStyle = "rgba(255, 255, 255, 0)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let dist = Math.sqrt(dx*dx+dy*dy);

        let force = (mouse.radius - dist)/mouse.radius;
        let forceDirX = dx/dist;
        let forceDirY = dy/dist;

        let dirX = forceDirX*force * this.speed;
        let dirY = forceDirY*force * this.speed;

        if(dist < mouse.radius){
            this.x -= dirX;
            this.y -= dirY;
        }
        else{
            if(this.x !== this.baseX){
                let dx = this.x - this.baseX;
                this.x -= dx /10;
            }
            if(this.y !== this.baseY){
                let dy = this.y - this.baseY;
                this.y -= dy /10;
            }
        }
    }
}

init();
window.addEventListener('resize', resizeReset);
window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseout', mouseout);