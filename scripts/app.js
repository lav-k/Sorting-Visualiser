// First create the bars and styling to it

let arr = []

createNewArray();

function createNewArray(bars_no = 30) {

    deleteArray();

    arr = [];
    for(let i=0; i<bars_no; i++)
    {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    console.log(arr);

// console.log(arr);

const bars = document.querySelector(".bars");

for(let i=0; i<bars_no; i++) 
{
    const bar = document.createElement("div");
    bar.style.height = `${arr[i]*3}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`bar_no${i}`);
    bars.appendChild(bar);
}
}

// This function will delete all the previou bars so that new can be added
function deleteArray() {
    const bars = document.querySelector(".bars");
    bars.innerHTML = '';
}

// Swap function to swap the two bars after comparison

function swap(elem1, elem2) {
    let temp = elem1.style.height;
    elem1.style.height = elem2.style.height;
    elem2.style.height = temp;
}

// Function to disable algorithms list

function disableAlgoBtn() {
    document.querySelector(".algo-list").disabled = true;
}
// disableAlgoBtn();
// Function to enable algo list

function enableAlgoBtn() {
    document.querySelector(".algo-list").disabled = false;
}

// Function to disable generate array button

function disablegenarateArrayBtn() {
    document.querySelector(".random").disabled = true;    
}

// disablegenarateArrayBtn();

// Function to enable generate array button

function enablegenarateArrayBtn() {
    document.querySelector(".random").disabled = false;    
}

// Function to disable arrray size

function disableArraySize() {
    document.querySelector(".size").disabled = true;
}

// disableArraySize();
// Function to enable arrray size

function enableArraySize() {
    document.querySelector(".size").disabled = false;
}

// Functin to disable sort button

function disableSortBtn() {
    document.querySelector(".start").disabled = true;
}
// disableSortBtn();

// Functin to enable sort button

function enableSortBtn() {
    document.querySelector(".start").disabled = false;
}

// Function for selecting size

let arraySize = document.querySelector('.size');

arraySize.addEventListener('input', function(){
    console.log(arraySize.value, typeof(arraySize.value));
    createNewArray(arraySize.value);
});

// Function  to generate new random array

const newArray = document.querySelector(".random");
newArray.addEventListener("click", function() {
    enableSortBtn();
    enableArraySize();
    createNewArray(arraySize.value);
});

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let delay = 260;
const speed = document.querySelector('#speed_list');
