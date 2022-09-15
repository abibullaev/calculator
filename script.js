const weight = document.querySelector('#weight');
const weightRange = document.querySelector('#weightRange');
const length = document.querySelector('#length');
const lengthRange = document.querySelector('#lengthRange');
const width = document.querySelector('#width');
const widthRange = document.querySelector('#widthRange');
const height = document.querySelector('#height');
const heightRange = document.querySelector('#heightRange');
const price = document.querySelector('#price');
const additional = document.querySelector(".calculator-item-additional")
const firstItem = document.querySelector('.first');

lengthRange.oninput = () => {
    length.value = lengthRange.value;
}
length.onchange = () => {
    if(length.value == ''){
        lengthRange.value = 0;
    }else if(length.value != weightRange.value){
        lengthRange.value = length.value
    }
}
widthRange.oninput = () => {
    width.value = widthRange.value
}
width.onchange = () => {
    if(width.value == ''){
        widthRange.value = 0;
    }else if(width.value != widthRange.value){
        widthRange.value = width.value
    }
}
heightRange.oninput = () => {
    height.value = heightRange.value
}
height.onchange = () => {
    if(height.value == ''){
        heightRange.value = 0;
    }else if(height.value != heightRange.value){
        heightRange.value = width.value
    }
}
weightRange.oninput = () => {
    weight.value = weightRange.value;

    switch (weightRange.value){
        case '0':
            price.value = '0 $';
            break;

        case '1': 
            price.value = '28.93 $'
            break;
        case '2':
            price.value = '35.10 $'
            break;
        case '3': 
            price.value = '40.49 $'
            break;
        case '4':
            price.value = '44.20 $'
            break;
        case '5':
            price.value = '49.41 $'
            break;
        case '6':
            price.value = '54.15 $'
            break;
        case '7':
            price.value = '58.75 $'
            break;
        case '8':
            price.value = '63.48 $'
            break;
        case '9':
            price.value = '67.67 $'
            break;
        case '10':
            price.value = '72.81 $'
            break;
        case '11':
            price.value = '79.63 $'
            break;
        case '12':
            price.value = '80.73 $'
            break;
        case '13':
            price.value = '83.37 $'
            break;
        case '14':
            price.value = '85.24 $'
            break;
        case '15':
            price.value = '87.11 $'
            break;
        case '16':
            price.value = '95.23 $'
            break;
        case '17':
            price.value = '97.10 $'
            break;
        case '18':
            price.value = '98.97 $'
            break;
        case '19': 
            price.value = '100.56 $';
            break;
        case '20': 
            price.value = '102.71 $'
            break;
    }
}
weight.onchange = () => {
    if(weight.value == ''){
        weightRange.value = 0;
    }else if(weight.value != weightRange.value){
        weightRange.value = weight.value
    }

    switch (weight.value){
        case '0':
            price.value = '0 $';
            break;

        case '1': 
            price.value = '28.93 $'
            break;
        case '2':
            price.value = '35.10 $'
            break;
        case '3': 
            price.value = '40.49 $'
            break;
        case '4':
            price.value = '44.20 $'
            break;
        case '5':
            price.value = '49.41 $'
            break;
        case '6':
            price.value = '54.15 $'
            break;
        case '7':
            price.value = '58.75 $'
            break;
        case '8':
            price.value = '63.48 $'
            break;
        case '9':
            price.value = '67.67 $'
            break;
        case '10':
            price.value = '72.81 $'
            break;
        case '11':
            price.value = '79.63 $'
            break;
        case '12':
            price.value = '80.73 $'
            break;
        case '13':
            price.value = '83.37 $'
            break;
        case '14':
            price.value = '85.24 $'
            break;
        case '15':
            price.value = '87.11 $'
            break;
        case '16':
            price.value = '95.23 $'
            break;
        case '17':
            price.value = '97.10 $'
            break;
        case '18':
            price.value = '98.97 $'
            break;
        case '19': 
            price.value = '100.56 $';
            break;
        case '20': 
            price.value = '102.71 $'
            break;
    }
}