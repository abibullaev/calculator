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
const button = document.querySelector('.calculator-button');

document.body.addEventListener('click', e => {
    additional.classList.remove('active')
})

additional.addEventListener('click', e => {
    e.stopPropagation()
});

lengthRange.oninput = () => {
    length.classList.remove('error');
    length.value = lengthRange.value;
}

widthRange.oninput = () => {
    width.classList.remove('error')
    width.value = widthRange.value
}

heightRange.oninput = () => {
    height.classList.remove('error')
    height.value = heightRange.value
}

weightRange.addEventListener("input", e => {
    weight.value = weightRange.value;
})

weightRange.addEventListener("click", e => {
    additional.classList.add('active');
    e.stopPropagation();
})

button.onclick = () => {
    let array = [length, height, width];

    if (array.some(element => element.value == 0) && weight.value > 0) {
        switch (weight.value) {
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
        alert("Вы не заполнили все поля. Поэтому стоимость посылки будет ориентировочная точность стоимость будет определена в момент взвешивания и измерения габаритов.")
    } else if (weight.value == 0 && array.every(element => element.value == 0)) {
        alert("Вы ничего не ввели!")
    } else if (array.every(element => element.value > 0)) {
        let result = 0;
        array.forEach(item => {
            result += Number(item.value)
        })
        if (result <= 150) {
            let volumeWeight = Math.ceil((height.value * width.value * length.value) / 8000);
            if (volumeWeight > weight.value) {
                switch (volumeWeight) {
                    case 1:
                        price.value = '28.93 $'
                        break;
                    case 2:
                        price.value = '35.10 $'
                        break;
                    case 3:
                        price.value = '40.49 $'
                        break;
                    case 4:
                        price.value = '44.20 $'
                        break;
                    case 5:
                        price.value = '49.41 $'
                        break;
                    case 6:
                        price.value = '54.15 $'
                        break;
                    case 7:
                        price.value = '58.75 $'
                        break;
                    case 8:
                        price.value = '63.48 $'
                        break;
                    case 9:
                        price.value = '67.67 $'
                        break;
                    case 10:
                        price.value = '72.81 $'
                        break;
                    case 11:
                        price.value = '79.63 $'
                        break;
                    case 12:
                        price.value = '80.73 $'
                        break;
                    case 13:
                        price.value = '83.37 $'
                        break;
                    case 14:
                        price.value = '85.24 $'
                        break;
                    case 15:
                        price.value = '87.11 $'
                        break;
                    case 16:
                        price.value = '95.23 $'
                        break;
                    case 17:
                        price.value = '97.10 $'
                        break;
                    case 18:
                        price.value = '98.97 $'
                        break;
                    case 19:
                        price.value = '100.56 $';
                        break;
                    case 20:
                        price.value = '102.71 $'
                        break;
                }
            }else{
                switch (weight.value) {
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
        } else {
            alert('Данный вид посылки является нестандартным. Просьба обратиться к менеджеру.')
        }
    } else {
        array.forEach(item => {
            if (item.value == 0) {
                item.classList.add('error')
            } else {
                item.classList.remove('error')
            }
        })
    }
}