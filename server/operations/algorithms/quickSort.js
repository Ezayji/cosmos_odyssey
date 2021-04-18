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

// const prices = [
//     {
//         flightStart: "2021-04-16T20:28:41.4051566Z"
//     },
//     {
//         flightStart: "2021-04-29T21:49:41.4119461Z"
//     },
//     {
//         flightStart: "2021-04-22T16:01:41.4119721Z"
//     },
//     {
//         flightStart: "2021-04-29T02:06:41.4119973Z"
//     },
//     {
//         flightStart: "2021-04-20T14:04:41.4120318Z"
//     },
//     {
//         flightStart: "2021-04-19T02:15:41.412058Z"
//     },
//     {
//         flightStart: "2021-04-24T08:19:41.412083Z"
//     },
//     {
//         flightStart: "2021-04-27T19:57:41.4121116Z"
//     },
//     {
//         flightStart: "2021-04-20T06:22:41.4121355Z"
//     },
//     {
//         flightStart: "2021-04-15T18:21:41.4121594Z"
//     },
//     {
//         flightStart: "2021-04-20T00:46:41.4121831Z"
//     },
//     {
//         flightStart: "2021-04-26T04:25:41.4122111Z"
//     },
//     {
//         flightStart: "2021-04-18T07:46:41.4122346Z"
//     },
//     {
//         flightStart: "2021-04-15T16:05:41.4122588Z"
//     },
//     {
//         flightStart: "2021-04-27T07:40:41.4122866Z"
//     },
//     {
//         flightStart: "2021-04-21T06:36:41.4123102Z"
//     },
//     {
//         flightStart: "2021-04-26T12:01:41.4123343Z"
//     },
//     {
//         flightStart: "2021-04-19T10:06:41.4123589Z"
//     },
//     {
//         flightStart: "2021-04-21T16:13:41.4123865Z"
//     }
// ];

// quickSort(prices);

// console.log(prices);