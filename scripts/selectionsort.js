async function selectionSort() {
    const elem = document.querySelectorAll(".bar");
    const about = document.querySelector(".about");
    const best_time = document.querySelector(".time_best");
    const worst_time = document.querySelector(".time_worst");
    const space = document.querySelector(".space");

    best_time.textContent = "Best Case = O(n)"
    worst_time.textContent = "Worst Case = O(n^2)"
    space.textContent = "Space Complexity = O(1)"


    about.textContent = "The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning."+ 
                      "The algorithm maintains two subarrays in a given array."+
                      "The subarray which already sorted. "+
                      "The remaining subarray was unsorted."+
                      "In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray."

    for (let i = 0; i < elem.length; i++) {
        let min_index = i;
        elem[i].style.background = 'blue';

        for (let j = i + 1; j < elem.length; j++) {
            elem[j].style.background = 'red';

            await waitforme(delay);
            if (parseInt(elem[j].style.height) < parseInt(elem[min_index].style.height)) {
                if (min_index !== i) {
                    elem[min_index].style.background = 'cyan';
                }
                min_index = j;
            }
            else {
                elem[j].style.background = 'cyan';
            }
        }
        await waitforme(delay);
        swap(elem[min_index], elem[i]);
        elem[min_index].style.background = 'cyan';
        elem[i].style.background = 'green';
    }
}




async function selectionSortFunction() {

    console.log("in");
    disableArraySize();
    disablegenarateArrayBtn();
    disableSortBtn();
    await selectionSort();
    enableArraySize();
    enablegenarateArrayBtn();
    enableSortBtn();
}







