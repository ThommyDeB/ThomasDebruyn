/*const fadeText = document.getElementsByClassName('fade-text')[0];
let texts1 = ['competitive programmer', 'front-end web developer', 'game developer'];
let j= 0;

setInterval(function(){
    j = (i+1)%texts1.length;
    fadeText.className = 'fade-text fade imp-home';
    setTimeout(function(){
        fadeText.innerHTML = texts1[j];
        fadeText.className='fade-text un-fade imp-home';
    }, 1000);
}, 4000);*/


let textParent = document.getElementById("specialities-box");
let texts = ['competitive programmer', 'front-end web developer', 'game developer'];
let i= 0;
let prevText = document.getElementsByClassName('speciality')[0];

setInterval(function(){
    i = (i+1)%texts.length;
    
    let currText = document.createElement('h2');
    currText.innerHTML = texts[i];
    currText.className = "speciality move-up imp-home";
    textParent.appendChild(currText);
    
    setTimeout(function(){
        prevText.remove();
        prevText = currText;
    }, 1000);
}, 4000);

const light = document.querySelector('.light');
const grid = document.querySelector('#hex-grid');

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

const languagesArrow = document.getElementsByClassName('languages-arrow')[0];
const languagesArrowPrev = document.getElementsByClassName('languages-arrow-prev')[0];
const languageDivs = document.getElementsByClassName('languagediv');
const circle = document.getElementsByClassName('growcircle')[0];
const langImgs = document.getElementsByClassName('language');
const langDots = document.getElementsByClassName('dot');

let index = 0;

/*function nextLanguageSection(){
    circle.className="growcircle circle-grow";

    setTimeout(function(){
        languageDivs[index].style.opacity = '0';
        langDots[index].style.opacity = "0.3";
        index++;
        if(index>languageDivs.length-1){
            index= 0;
        }
        languageDivs[index].style.opacity = '1';
        langDots[index].style.opacity = "1";
        circle.className="growcircle circle-shrink";
        setTimeout(function(){
            circle.className="growcircle";
        }, 500);
    }, 500);
}

function prevLanguageSection(){
    circle.className="growcircle circle-grow";

    setTimeout(function(){
        languageDivs[index].style.opacity = '0';
        langDots[index].style.opacity = "0.3";
        index--;
        if(index<0){
            index= languageDivs.length-1;
        }
        languageDivs[index].style.opacity = '1';
        langDots[index].style.opacity = "1";
        circle.className="growcircle circle-shrink";
        setTimeout(function(){
            circle.className="growcircle";
        }, 500);
    }, 500);
}

function SkillSect(){
    LanguageSect(0)
}
function HTMLSect(){
    LanguageSect(1)
}
function CSSSect(){
    LanguageSect(2)
}
function JavascriptSect(){
    LanguageSect(3)
}
function PythonSect(){
    LanguageSect(4)
}
function CSharpSect(){
    LanguageSect(5)
}
function CPlusPlusSect(){
    LanguageSect(6)
}

function LanguageSect(ind){
    circle.className="growcircle circle-grow";

    setTimeout(function(){
        languageDivs[index].style.opacity = '0';
        langDots[index].style.opacity = "0.3";
        index = ind
        languageDivs[index].style.opacity = '1';
        langDots[index].style.opacity = "1";
        circle.className="growcircle circle-shrink";
        setTimeout(function(){
            circle.className="growcircle";
        }, 500);
    }, 500);
}

languagesArrow.addEventListener('click', nextLanguageSection);
languagesArrowPrev.addEventListener('click', prevLanguageSection);

langImgs[0].addEventListener('click', HTMLSect);
langImgs[1].addEventListener('click', CSSSect);
langImgs[2].addEventListener('click', JavascriptSect);
langImgs[3].addEventListener('click', PythonSect);
langImgs[4].addEventListener('click', CSharpSect);
langImgs[5].addEventListener('click', CPlusPlusSect);

langDots[0].addEventListener('click', SkillSect)
langDots[1].addEventListener('click', HTMLSect);
langDots[2].addEventListener('click', CSSSect);
langDots[3].addEventListener('click', JavascriptSect);
langDots[4].addEventListener('click', PythonSect);
langDots[5].addEventListener('click', CSharpSect);
langDots[6].addEventListener('click', CPlusPlusSect);*/

let ang = 0;
let ind = 0;

function nextCarousel(){
    ang = ang-51.4;
    document.querySelector(':root').style.setProperty('--ang', ang);
    //languageDivs[ind].style.opacity = 0;
    let clnm = languageDivs[ind].className;
    let langdiv = languageDivs[ind];
    langDots[ind].style.opacity = "0.3";
    langdiv.className = clnm+" opacity-notvisible";
    setTimeout(function(){
        langdiv.className = clnm;
        langdiv.style.opacity = 0;
    }, 500);
    ind++;
    if(ind > languageDivs.length-1){
        ind = 0;
    }
    //languageDivs[ind].style.opacity = 1;
    let clnmb = languageDivs[ind].className;
    let langdivb = languageDivs[ind];
    langDots[ind].style.opacity = "1";
    langdivb.className = clnmb+" opacity-visible";
    setTimeout(function(){
        langdivb.className = clnmb;
        langdivb.style.opacity = 1;
    }, 500);
}
function prevCarousel(){
    ang = ang+51.4;
    document.querySelector(':root').style.setProperty('--ang', ang);
    //languageDivs[ind].style.opacity = 0;
    let clnm = languageDivs[ind].className;
    let langdiv = languageDivs[ind];
    langDots[ind].style.opacity = "0.3";
    langdiv.className = clnm+" opacity-notvisible";
    setTimeout(function(){
        langdiv.className = clnm;
        langdiv.style.opacity = 0;
    }, 500);
    ind--;
    if(ind<0){
        ind = languageDivs.length-1;
    }
    //languageDivs[ind].style.opacity = 1;
    let clnmb = languageDivs[ind].className;
    let langdivb = languageDivs[ind];
    langDots[ind].style.opacity = "1";
    langdivb.className = clnmb+" opacity-visible";
    setTimeout(function(){
        langdivb.className = clnmb;
        langdivb.style.opacity = 1;
    }, 500);
}
function aCarousel(inde){
    let diff = (inde-index)*51.4;
    ang = -diff;
    document.querySelector(':root').style.setProperty('--ang', ang);
    //languageDivs[ind].style.opacity = 0;
    let clnm = languageDivs[ind].className;
    let langdiv = languageDivs[ind];
    langDots[ind].style.opacity = "0.3";
    langdiv.className = clnm+" opacity-notvisible";
    setTimeout(function(){
        langdiv.className = clnm;
        langdiv.style.opacity = 0;
    }, 500);
    ind = inde;
    if(ind<0){
        ind = languageDivs.length-1;
    }
    //languageDivs[ind].style.opacity = 1;
    let clnmb = languageDivs[ind].className;
    let langdivb = languageDivs[ind];
    langDots[ind].style.opacity = "1";
    langdivb.className = clnmb+" opacity-visible";
    setTimeout(function(){
        langdivb.className = clnmb;
        langdivb.style.opacity = 1;
    }, 500);
}

languagesArrow.addEventListener('click', nextCarousel);
languagesArrowPrev.addEventListener('click', prevCarousel);

for(let i = 0; i < langDots.length; i++){
    langDots[i].addEventListener('click', function(){aCarousel(i);});
}
for(let i = 0; i < langImgs.length; i++){
    langImgs[i].addEventListener('click', function(){aCarousel(i+1);});
}

let progressBar = document.getElementsByClassName('progressbar')[0];
let totHeight = document.body.scrollHeight - window.innerHeight;

const menuDiv = document.querySelector('.menu-div');

window.onscroll = function(){
    let progressHeight = (window.scrollY/totHeight)*100;
    progressBar.style.height = progressHeight + '%';
}

const menuButton = document.querySelector('.menu-button-img');
const menuCircle = document.querySelector('.menu-circle');
const menuCircleParent = document.querySelector('.menu-circle-parent');

const sections = document.querySelector('.sections');
const theSections = document.querySelectorAll('.section');

// Redo if resize screen
const sectionTops = [0, 0, 0, 0];
for(let i = 1; i < theSections.length; i++){
    sectionTops[i] = sectionTops[i-1]+theSections[i-1].clientHeight;
}

let menuOpen = false;

function OpenCloseMenu(){
    if(!menuOpen){
        menuCircleParent.style.marginTop = '0';
        menuCircle.className = "menu-circle circle-grow";
        setTimeout(function(){
            menuDiv.tabIndex = 0;
            sections.tabIndex = -1;
            menuDiv.style.opacity = 1;
            menuDiv.style.zIndex = 19999;
            menuCircle.className = "menu-circle circle-shrink";
            menuDiv.style.top = window.scrollY +'px';
            document.body.style.overflow = "hidden";
            setTimeout(function(){menuCircleParent.style.marginTop = '-400vh';},500);
        }, 500);
        menuOpen = true;
    }
    else{
        menuCircle.className = "menu-circle circle-grow";
        menuCircleParent.style.marginTop = '0';
        setTimeout(function(){
            menuDiv.tabIndex = -1;
            sections.tabIndex = 0;
            menuDiv.style.opacity = 0;
            menuDiv.style.zIndex = 0;
            menuCircle.className = "menu-circle circle-shrink";
            menuDiv.style.top = window.scrollY+'px';
            document.body.style.overflow = "auto";
            setTimeout(function(){menuCircleParent.style.marginTop = '-400vh';},500);
        }, 500);
        menuOpen = false;
    }
}
function SelectSect(section){
    menuCircle.className = "menu-circle circle-grow";
    menuCircleParent.style.marginTop = '0';
    setTimeout(function(){
        menuDiv.tabIndex = -1;
        sections.tabIndex = 0;
        menuDiv.style.opacity = 0;
        menuDiv.style.zIndex = 0;
        menuCircle.className = "menu-circle circle-shrink";
        menuDiv.style.top = window.scrollY+'px';
        document.body.style.overflow = "auto";
        console.log(sectionTops[section]);
        window.scrollTo(sectionTops[section], sectionTops[section]);
        setTimeout(function(){menuCircleParent.style.marginTop = '-400vh';},500);
    }, 500);
    menuOpen = false;
}

menuButton.addEventListener('click', OpenCloseMenu);

const homeButton = document.querySelector('.home-button');
const skillButton = document.querySelector('.skill-button');
const projectsButton = document.querySelector('.projects-button');
const timelineButton = document.querySelector('.timeline-button');

homeButton.addEventListener('click', function(){SelectSect(0);});
skillButton.addEventListener('click', function(){SelectSect(1);});
projectsButton.addEventListener('click', function(){SelectSect(2);});
timelineButton.addEventListener('click', function(){SelectSect(3);});

const homeButtonDiv = document.querySelector('.home-button-div');
const skillButtonDiv = document.querySelector('.skill-button-div');
const projectsButtonDiv = document.querySelector('.projects-button-div');
const timelineButtonDiv = document.querySelector('.timeline-button-div');

homeButtonDiv.addEventListener('click', function(){SelectSect(0);});
skillButtonDiv.addEventListener('click', function(){SelectSect(1);});
projectsButtonDiv.addEventListener('click', function(){SelectSect(2);});
timelineButtonDiv.addEventListener('click', function(){SelectSect(3);});


const datesDiv = document.querySelector('.dates');
let currentDate = 0;
let datesLeft = [0];
datesLeft.length = datesDiv.childElementCount;
let prevyear = 0;
const yearDivs = document.querySelectorAll('.year-info');

function SelectYear(year){
    datesDiv.style.marginLeft = (datesLeft[year] * -1) + 'px';
    datesDiv.children[prevyear].classList.remove('selected');
    datesDiv.children[year].classList.add('selected');
    yearDivs[prevyear].style.opacity = 0;
    yearDivs[year].style.opacity = 1;
    prevyear = year;
}

datesDiv.children[0].addEventListener('click', function(){SelectYear(0);});
datesDiv.children[1].addEventListener('click', function(){SelectYear(1);});
for(let i = 1; i < datesDiv.children.length; i++){
    datesLeft[i] = datesLeft[i-1]+datesDiv.children[i-1].clientWidth;
    datesDiv.children[i].addEventListener('click', function(){SelectYear(i);});
}