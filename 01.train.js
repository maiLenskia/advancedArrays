function train(input) {
    let wagons = input.shift().split(' ').map(Number); // first element of array
    let maxCapacity = Number(input.shift()); // for second element of array

    for (let line of input) {
        let tokens = line.split(' ');

        if (tokens.length === 2) {
            let wagonPassingers = Number(tokens[1]);
            wagons.push(wagonPassingers);
        } else {
            let passengersCount = Number(tokens[0]);

            for (let i = 0; i < wagons.length; i++) {
                let currentCapacity = wagons[i];

                if (passengersCount + currentCapacity <= maxCapacity) {
                    wagons[i] += passengersCount;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}


train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])