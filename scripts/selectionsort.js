async function selectionSort() {
    const elem = document.querySelectorAll(".bar");

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







