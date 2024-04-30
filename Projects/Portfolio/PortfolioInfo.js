const light = document.querySelector('.light');

function mousemove(e){
    const y = e.pageY;
    const x = e.pageX;
    const scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    light.style.left =  x - scrollLeft + 'px';
    light.style.top = y - scrollTop + 'px';
}

document.addEventListener('mouseenter', mousemove);
document.addEventListener('mousemove', mousemove);