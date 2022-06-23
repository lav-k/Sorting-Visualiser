async function insertionSort() {
    const elem = document.querySelectorAll(".bar");
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
