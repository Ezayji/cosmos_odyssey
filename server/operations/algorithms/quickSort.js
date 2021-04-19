
// SWAPING HELPER
const swap = (list, idx1, idx2) => {
    const temp = list[idx2];
    list[idx2] = list[idx1];
    list[idx1] = temp;
};


// QUICKSORT
function quickSort(list, start = 0, end = list.length - 1, comparison_function) {
    if(start >= end) return;
    
    // determine pivot element
    const range = end - start + 1;
    const pivot_idx = start + Math.floor(Math.random() * range);
    const pivot_el = list[pivot_idx];

    // swap pivot and last element in the list
    swap(list, pivot_idx, end);

    // all elements less/more than pivot will be left of this index
    let pointer = start;

    for(let i = start; i < end; i++){
        // element out of place
        if(comparison_function(list[i], pivot_el)){

            //swap the element with element at pointer
            swap(list, i, pointer);
            // increment pointer
            pointer += 1;
        };
    };

    // swap pivot and pointer values
    swap(list, end, pointer);

    // quicksort lesser than and bigger than pivot sides of the list
    quickSort(list, start, pointer - 1, comparison_function);
    quickSort(list, pointer + 1, end, comparison_function);
};


// COMPARISON FUNCTIONS

// by flightStart
function byFlightStart(item, pivot) {
    return new Date(item.flightStart).valueOf() < new Date(pivot.flightStart).valueOf();
};


// ===== for combined options =====

// by price ascending
function byPriceAsc(item, pivot) {
    return item.price < pivot.price;
};

// by price descending
function byPriceDesc(item, pivot){
    return item.price > pivot.price;
};


// by distance ascending
function byDistanceAsc(item, pivot) {
    return item.distance < pivot.distance;
};

// by distance descending
function byDistanceDesc(item, pivot){
    return item.distance > pivot.distance;
};


// by traveltime ascending
function byTraveltimeAsc(item, pivot) {
    return item.travelTime < pivot.travelTime;
};

// by traveltime descending
function byTraveltimeDesc(item, pivot){
    return item.travelTime > pivot.travelTime;
};

module.exports = {
    quickSort,
    byFlightStart,
    byPriceAsc,
    byPriceDesc,
    byDistanceAsc,
    byDistanceDesc,
    byTraveltimeAsc,
    byTraveltimeDesc
};