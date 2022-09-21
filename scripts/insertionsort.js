async function insertionSort() {
    const elem = document.querySelectorAll(".bar");
    
    const about = document.querySelector(".about");
    const best_time = document.querySelector(".time_best");
    const worst_time = document.querySelector(".time_worst");
    const space = document.querySelector(".space");

    best_time.textContent = "Best Case = O(n)"
    worst_time.textContent = "Worst Case = O(n^2)"
    space.textContent = "Space Complexity = O(1)"
    about.innerHTML = "Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands."+
                      "The array is virtually split into a sorted and an unsorted part."+
                      "Values from the unsorted part are picked and placed at the correct position in the sorted part."


    elem[0].style.background = 'green';

    for (let i = 1; i < elem.length; i++) {
        let j = i - 1;
        let key = elem[i].style.height;
        elem[i].style.background = 'blue';
        await waitforme(delay);
        while (j >= 0 && (parseInt(elem[j].style.height) > parseInt(key))) {
            elem[j].style.background = 'blue';
            elem[j + 1].style.height = elem[j].style.height;
            j--;

            await waitforme(delay);
            for (let k = i; k >= 0; k--) {
                elem[k].style.background = 'green';
            }
        }
        elem[j + 1].style.height = key;
        elem[i].style.background = 'green';
    }

}


async function insertionSortFunction() {
    console.log("in");
    disableArraySize();
    disablegenarateArrayBtn();
    disableSortBtn();
    await insertionSort();
    enableArraySize();
    enablegenarateArrayBtn();
    enableSortBtn();

}
