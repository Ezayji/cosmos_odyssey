const { quickSort, byFlightStart, byDistance, byPrice, byTraveltime } = require('../operations/algorithms/quickSort');

const { assert, expect } = require('chai');

// helper data
const { flightStarts, flightStartsSorted, distances, distancesSorted, prices, pricesSorted, travelTimes, travelTimesSorted } = require('./helpers/data');

describe('* Quicksort comparison functions *', () => {
    describe('-- ByFlightStart --', () => {
        it('Sorts an array containing objects with flightStart property in ascending order', () => {
            const priceList = flightStarts.slice(0, flightStarts.length);
            
            quickSort(priceList, 0, priceList.length - 1, byFlightStart);

            assert.deepEqual(priceList, flightStartsSorted);
        });
    });

    describe('-- byDistance --', () => {
        it('Sorts and array containing objects with distance property in ascending order', () => {
            const distanceList = distances.slice(0, distances.length);

            quickSort(distanceList, 0, distanceList.length - 1, byDistance);

            assert.deepEqual(distanceList, distancesSorted);
        });
    });

    describe('-- byPrice --', () => {
        it('Sorts an array containing objects with price property in ascending order', () => {
            const priceList = prices.slice(0, prices.length);

            quickSort(priceList, 0, priceList.length - 1, byPrice);

            assert.deepEqual(priceList, pricesSorted);
        });
    });

    describe('-- byTraveltime --', () => {
        it('Sorts an array containing objects with travelTime property in ascending order', () => {
            const travelTimeList = travelTimes.slice(0, travelTimes.length);

            quickSort(travelTimeList, 0, travelTimeList.length - 1, byTraveltime);

            assert.deepEqual(travelTimeList, travelTimesSorted);
        });
    });

});