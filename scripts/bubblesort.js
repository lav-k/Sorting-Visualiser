async function bubbleSort() {
    const elem = document.querySelectorAll(".bar");
    const about = document.querySelector(".about");
    const best_time = document.querySelector(".time_best");
    const worst_time = document.querySelector(".time_worst");
    const space = document.querySelector(".space");

    best_time.textContent = "Best Case = O(n)"
    worst_time.textContent = "Worst Case = O(n^2)"
    space.textContent = "Space Complexity = O(1)"
    about.innerHTML = "Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order." +
     "It is called bubble sort because the movement of array elements is just like the movement of air bubbles in the water."+
     " Bubbles in water rise up to the surface; similarly, the array elements in bubble sort move to the end in each iteration."


    for (let i = 0; i < elem.length - 1; i++) {
        for (let j = 0; j < elem.length - i - 1; j++) {
            elem[j].style.background = 'blue';
            elem[j + 1].style.background = 'blue';

            if (parseInt(elem[j].style.height) > parseInt(elem[j + 1].style.height)) {
                await waitforme(delay);
                swap(elem[j], elem[j + 1]);
            }
            elem[j].style.background = 'cyan';
            elem[j + 1].style.background = 'cyan';
        }
        elem[elem.length - i - 1].style.background = "green";
    }
    elem[0].style.background = "green";
}



// const selectSort = document.querySelector(".algo-list")
// const Sortbtn = document.querySelector(".start");
// var algovalue = selectSort.options[selectSort.selectedIndex].value;
// console.log(algovalue);


async function bubbleSortFunction() {
    console.log("in");
    disableArraySize();
    disablegenarateArrayBtn();
    disableSortBtn();
    await bubbleSort();
    enableArraySize();
    enablegenarateArrayBtn();
    enableSortBtn();

}


