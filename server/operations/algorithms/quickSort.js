const swap = (list, idx1, idx2) => {
    const temp = list[idx2];
    list[idx2] = list[idx1];
    list[idx1] = temp;
};

const quickSort = (list, start = 0, end = list.length - 1) => {
    if(start >= end) return;
    
    // determine pivot element
    const range = end - start + 1;
    const pivot_idx = start + Math.floor(Math.random() * range);
    const pivot_el = new Date(list[pivot_idx].flightStart).valueOf();
    
    // swap pivot and last element in the list
    swap(list, pivot_idx, end);

    // all elements less than pivot will be left of this index
    let less_than_pointer = start;

    for(let i = start; i < end; i++){
        // element out of place
        if(new Date(list[i].flightStart).valueOf() < pivot_el){

            //swap the element with element at less than pointer
            swap(list, i, less_than_pointer);
            // increment less than pointer
            less_than_pointer += 1;
        };
    };

    // swap pivot and less than pointer values
    swap(list, end, less_than_pointer);

    // quicksort lesser than and bigger than pivot sides of the list
    quickSort(list, start, less_than_pointer - 1);
    quickSort(list, less_than_pointer + 1, end);
};

module.exports = {
    quickSort
};