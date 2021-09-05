const sketchBox = document.getElementById("sketchBox");
const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.getElementById("colorBtn");
const rainbowBtn = document.getElementById("rainbowBtn");
const eraserBtn =  document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");
const sliderBar = document.getElementById("sliderBar");
const sliderLabel = document.getElementById("label");
let colorBtnValue = true;
let eraserBtnValue = true;
let rainbowBtnValue = true;

// Functions

function gridIndicator(){
    sliderLabel.innerHTML = `Size : ${sliderBar.value}`;
    sliderBar.addEventListener('click', function(){
    sliderLabel.innerHTML = `Size : ${sliderBar.value}`;
    });
};

function updateValue() {
    sliderBar.value = this.value;
    return this.value;   
};

function customColor() {
    colorPicker.value = this.value;
    return this.value;
}

function resetGrid(){
    sketchBox.innerHTML = '';
}

function optionBtnCheck(){
    colorBtn.addEventListener('click', function(){
        colorBtnValue = true;
        eraserBtnValue = false;
        rainbowBtnValue = false;
        
    });
    eraserBtn.addEventListener('click', function(){
        colorBtnValue = false;
        eraserBtnValue = true;
        rainbowBtnValue = false;
        
    });
    rainbowBtn.addEventListener('click', function(){
        colorBtnValue = false;
        eraserBtnValue = false;
        rainbowBtnValue = true;
        });
};
let boxes = document.getElementsByClassName('boxes');

function customGrid () { 
    for(let i= 0; i < sliderBar.value * sliderBar.value; i++){
        let boxes = document.createElement('div');
        boxes.setAttribute("class", "boxes");
        boxes.addEventListener('mouseover', function brushModes(e){
            if(colorBtnValue === true){
           e.target.style.backgroundColor = `${colorPicker.value}`
        } else if(eraserBtnValue === true) {
            e.target.style.backgroundColor = `#FFFFFF`
        } else if(rainbowBtnValue === true) {
            e.target.style.backgroundColor = `rgb(${Math.random() * (255 - 0)}, ${Math.random() * (255 - 0)},${Math.random() * (255 - 0)})`;
        };
            
        });
        sketchBox.appendChild(boxes);
        sketchBox.style.gridTemplateColumns = `repeat(${sliderBar.value}, 1fr)`;
        sketchBox.style.gridTemplateRows = `repeat(${sliderBar.value}, 1fr)`;
        
    }
};

window.onload = gridIndicator(); customGrid();  optionBtnCheck();





