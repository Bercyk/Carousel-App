const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length;
const indicators = document.getElementsByClassName("item-indicator");
const descriptions = [
    {   
        title: "Joker", 
        description: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain."
    },
    {
        title: "Baby driver",
        description:"After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail."
    },
    {
        title: "Parasite",
        description:"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan."
    }
]

let slidePosition = 0;
let timer = null;

document.getElementById("button-prev").addEventListener("click", moveToPrevSlide);
document.getElementById("button-next").addEventListener("click", moveToNextSlide);

document.onload = initializeContent();



function initializeContent(){

    setTextContent();
    timer = new Timer(moveToNextSlide, 8000); 
}

function Timer(action, timeValue){

    let timerObj = setInterval(action, timeValue);

    this.reset = function() {
        if(timerObj){
            clearInterval(timerObj);
            timerObj = setInterval(action, timeValue);
        }
        return this;
    }
}

function setTextContent() {

    document.getElementById("title-name").textContent = descriptions[slidePosition].title;
    document.getElementById("description").textContent = descriptions[slidePosition].description;
}

function itemRender(){
    setTextContent();
    indicators[slidePosition].classList.add("item-active");
    slides[slidePosition].classList.add("carousel-item-visible");
}


function hideAllSlides(){
    for (let slide of slides){
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function resetAllIndicators(){
    for (let indicator of indicators){
        indicator.classList.remove("item-active");
    }
}

function moveToNextSlide(){
    
    if (slidePosition === totalSlides-1){
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }

    hideAllSlides();
    resetAllIndicators(); 
    itemRender();
    timer.reset();
}

function moveToPrevSlide(){
    
    if (slidePosition === 0){
        slidePosition = totalSlides - 1;
    }
    else {
        slidePosition--;
    }

    hideAllSlides();
    resetAllIndicators();
    itemRender();
    timer.reset();
}

