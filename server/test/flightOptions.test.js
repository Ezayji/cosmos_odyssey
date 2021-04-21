const { findNextFlight, combineOption, getOptionsForAllPaths } = require('../operations/algorithms/flightOptions');

const data = require('../../exampleresponse.json');

const { assert } = require('chai');

describe('* flightOptions *', () => {
    
    describe('-- findNextFlight --', () => {

        it('Returns an array with the first flight after specified take off time (ms) and the flight distance', () => {
            const result = findNextFlight(data.legs, 'Neptune', 'Uranus', 0);

            const expected = [ 
                {
                    id: "a64853c9-a246-4b1b-a766-a2fec8c52c0d",
                    company: {
                        id: "d552fc36-3372-47f6-84ee-4022b6bcb882",
                        name: "Space Voyager"
                    },
                    price: 1271132.44,
                    flightStart: "2021-04-19T20:01:41.4299903Z",
                    flightEnd: "2021-04-24T07:21:41.4299903Z",
                    from: 'Neptune',
                    to: 'Uranus'
                },
                1627450000
            ];

            expected[0].total_time = new Date(expected[0].flightEnd).valueOf() - new Date(expected[0].flightStart).valueOf();

            assert.deepEqual(result, expected);
        });

        it('Returns an array with the first flight (provided by a company that is passed in as an argument) after specified take off time (ms) and the flight distance', () => {
            const result = findNextFlight(data.legs, 'Earth', 'Jupiter', 0, 'Space Piper');

            const expected = [
                {
                    id: "a4ddce4b-1431-4d17-97ff-20d377679f2c",
                    company: {
                        id: "8f8e6208-49e3-4129-bb64-c8441da0f17f",
                        name: "Space Piper"
                    },
                    price: 145646.44,
                    flightStart: "2021-04-20T06:22:41.4121355Z",
                    flightEnd: "2021-04-26T04:05:41.4121355Z",
                    from: 'Earth',
                    to: 'Jupiter'
                },
                628730000
            ];

            expected[0].total_time = new Date(expected[0].flightEnd).valueOf() - new Date(expected[0].flightStart).valueOf();

            assert.deepEqual(result, expected);
        });

        it('Returns false if no flight is found that would be after the specified take off time (ms)', () => {
            const result = findNextFlight(data.legs, 'Earth', 'Jupiter', 100000000000000000000000);

            assert.deepEqual(result, false);
        });

    });

});