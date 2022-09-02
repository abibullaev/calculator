const input = document.querySelector("#range");
const weight = document.querySelector("#range2");
input.oninput = () => {
    weight.value = input.value;
}
weight.onchange = () => {
    if(weight.value != input.value){
        input.value = weight.value
    }
}