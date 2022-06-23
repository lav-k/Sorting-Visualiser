
const sort = async () => {
    const selectSort = document.querySelector(".algo-list")
    const Sortbtn = document.querySelector(".start");
    let algovalue = Number(selectSort.options[selectSort.selectedIndex].value);
    console.log(algovalue);

    switch (algovalue) {
        case 1:
            bubbleSortFunction();
            break;
        case 2:
            selectionSortFunction();
            break;
        case 3:
            insertionSortFunction();
            break;
    }
}