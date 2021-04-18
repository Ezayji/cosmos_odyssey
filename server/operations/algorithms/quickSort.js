const swap = (list, idx1, idx2) => {
    const temp = list[idx2];
    list[idx2] = list[idx1];
    list[idx1] = temp;
};

const quickSort = (list, start = 0, end = list.length - 1) => {
    if(start >= end) return;
    console.log('End:', end);
    console.log('Length: ', list.length);
    // determine pivot element
    const range = end + 1;
    const pivot_idx = Math.floor(Math.random() * range);
    const pivot_el = new Date(list[pivot_idx].flightStart).valueOf();
    
    // swap pivot and last element in the list
    swap(list, pivot_idx, end);

    // all elements less than pivot will be left of this index
    let less_than_pointer = start;

    for(let i = start; i < range; i++){
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

let prices = [
    {
        "id": "78b09b76-43da-415a-bafd-350df3c576e5",
        "company": {
            "id": "aab96db6-c7c1-42ab-8dfd-9d2198b7a9ca",
            "name": "Galaxy Express"
        },
        "price": 386097.95,
        "flightStart": "2021-04-16T20:28:41.4051566Z",
        "flightEnd": "2021-04-20T13:05:41.4051566Z"
    },
    {
        "id": "0cced241-b27d-4b92-99b6-e4c8c5a0f584",
        "company": {
            "id": "aab96db6-c7c1-42ab-8dfd-9d2198b7a9ca",
            "name": "Galaxy Express"
        },
        "price": 482479.44,
        "flightStart": "2021-04-29T21:49:41.4119461Z",
        "flightEnd": "2021-05-02T12:24:41.4119461Z"
    },
    {
        "id": "0162dd8a-36b8-4d4f-ae12-f50409648e13",
        "company": {
            "id": "05f9b9f6-dd1c-4ad1-bb94-9e748e39e5e7",
            "name": "Spacegenix"
        },
        "price": 414688.35,
        "flightStart": "2021-04-22T16:01:41.4119721Z",
        "flightEnd": "2021-04-25T15:39:41.4119721Z"
    },
    {
        "id": "7fac0158-d889-4cc1-a3c4-e580a2ce808a",
        "company": {
            "id": "98c760aa-f1da-4813-b5a0-b7aa3b72bf3a",
            "name": "Explore Origin"
        },
        "price": 588630.59,
        "flightStart": "2021-04-29T02:06:41.4119973Z",
        "flightEnd": "2021-04-30T04:34:41.4119973Z"
    },
    {
        "id": "0bfa0a9d-98d5-4c58-9daf-be6e195218ff",
        "company": {
            "id": "8127e946-8f2f-44c5-9fe8-bcbc6a027b1f",
            "name": "SpaceX"
        },
        "price": 548288.89,
        "flightStart": "2021-04-20T14:04:41.4120318Z",
        "flightEnd": "2021-04-26T03:18:41.4120318Z"
    },
    {
        "id": "f09e1a04-9416-4266-9a7d-19716a60db3b",
        "company": {
            "id": "aab96db6-c7c1-42ab-8dfd-9d2198b7a9ca",
            "name": "Galaxy Express"
        },
        "price": 377476.03,
        "flightStart": "2021-04-19T02:15:41.412058Z",
        "flightEnd": "2021-04-23T05:57:41.412058Z"
    },
    {
        "id": "95fb0449-1ab9-4fb8-9f3e-faa07dc4b2f4",
        "company": {
            "id": "8f8e6208-49e3-4129-bb64-c8441da0f17f",
            "name": "Space Piper"
        },
        "price": 236279.02,
        "flightStart": "2021-04-24T08:19:41.412083Z",
        "flightEnd": "2021-04-28T15:57:41.412083Z"
    },
    {
        "id": "07e85a0f-f67b-4d13-a897-063044f10135",
        "company": {
            "id": "8f8e6208-49e3-4129-bb64-c8441da0f17f",
            "name": "Space Piper"
        },
        "price": 140563.91,
        "flightStart": "2021-04-27T19:57:41.4121116Z",
        "flightEnd": "2021-05-01T17:46:41.4121116Z"
    },
    {
        "id": "a4ddce4b-1431-4d17-97ff-20d377679f2c",
        "company": {
            "id": "8f8e6208-49e3-4129-bb64-c8441da0f17f",
            "name": "Space Piper"
        },
        "price": 145646.44,
        "flightStart": "2021-04-20T06:22:41.4121355Z",
        "flightEnd": "2021-04-26T04:05:41.4121355Z"
    },
    {
        "id": "bdc0b9a2-a022-43cf-a58f-5cc329f6c720",
        "company": {
            "id": "05f9b9f6-dd1c-4ad1-bb94-9e748e39e5e7",
            "name": "Spacegenix"
        },
        "price": 603314.41,
        "flightStart": "2021-04-15T18:21:41.4121594Z",
        "flightEnd": "2021-04-21T12:50:41.4121594Z"
    },
    {
        "id": "722c2b1d-f762-4b4b-b828-7f7fd9165d2d",
        "company": {
            "id": "98c760aa-f1da-4813-b5a0-b7aa3b72bf3a",
            "name": "Explore Origin"
        },
        "price": 578582.67,
        "flightStart": "2021-04-20T00:46:41.4121831Z",
        "flightEnd": "2021-04-24T12:47:41.4121831Z"
    },
    {
        "id": "7c874129-2193-40cf-baad-8fd892ed6838",
        "company": {
            "id": "2768e53d-e104-47e4-a344-08faf27f6077",
            "name": "Space Odyssey"
        },
        "price": 270509.93,
        "flightStart": "2021-04-26T04:25:41.4122111Z",
        "flightEnd": "2021-04-30T19:43:41.4122111Z"
    },
    {
        "id": "82f6fcd3-60f6-4ad2-a7b1-474716033bd2",
        "company": {
            "id": "51112506-f25f-4e68-be1c-f2445ec55dd7",
            "name": "Spacelux"
        },
        "price": 105744.19,
        "flightStart": "2021-04-18T07:46:41.4122346Z",
        "flightEnd": "2021-04-24T00:51:41.4122346Z"
    },
    {
        "id": "bbd18e72-22c4-49e6-9ab6-e334b0616e79",
        "company": {
            "id": "2768e53d-e104-47e4-a344-08faf27f6077",
            "name": "Space Odyssey"
        },
        "price": 409065.80,
        "flightStart": "2021-04-15T16:05:41.4122588Z",
        "flightEnd": "2021-04-19T07:18:41.4122588Z"
    },
    {
        "id": "978990f2-2f90-4f9b-a60d-1fcba0913153",
        "company": {
            "id": "aab96db6-c7c1-42ab-8dfd-9d2198b7a9ca",
            "name": "Galaxy Express"
        },
        "price": 30994.48,
        "flightStart": "2021-04-27T07:40:41.4122866Z",
        "flightEnd": "2021-05-02T18:02:41.4122866Z"
    },
    {
        "id": "b94f144a-1aef-467c-a245-fd0b1ae44df5",
        "company": {
            "id": "51112506-f25f-4e68-be1c-f2445ec55dd7",
            "name": "Spacelux"
        },
        "price": 31750.76,
        "flightStart": "2021-04-21T06:36:41.4123102Z",
        "flightEnd": "2021-04-25T23:28:41.4123102Z"
    },
    {
        "id": "3aff6327-ff38-43e1-8ece-0b9d776c4970",
        "company": {
            "id": "8127e946-8f2f-44c5-9fe8-bcbc6a027b1f",
            "name": "SpaceX"
        },
        "price": 271048.83,
        "flightStart": "2021-04-26T12:01:41.4123343Z",
        "flightEnd": "2021-04-28T14:24:41.4123343Z"
    },
    {
        "id": "a824aba2-99ae-445b-a3b1-3dc62e470693",
        "company": {
            "id": "0ef49234-1de7-427f-84bf-bbcde1ec4536",
            "name": "Explore Dynamite"
        },
        "price": 570065.52,
        "flightStart": "2021-04-19T10:06:41.4123589Z",
        "flightEnd": "2021-04-24T17:35:41.4123589Z"
    },
    {
        "id": "828990c1-4e69-4f8f-af9d-4fe21f9ef63c",
        "company": {
            "id": "98c760aa-f1da-4813-b5a0-b7aa3b72bf3a",
            "name": "Explore Origin"
        },
        "price": 138085.39,
        "flightStart": "2021-04-21T16:13:41.4123865Z",
        "flightEnd": "2021-04-23T16:33:41.4123865Z"
    }
];

quickSort(prices);

console.log(prices);