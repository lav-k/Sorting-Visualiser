async function bubbleSort() {
    const elem = document.querySelectorAll(".bar");

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


