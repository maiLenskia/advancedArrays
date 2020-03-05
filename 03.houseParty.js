function houseParty(input) {
    let list = [];

    for (let line of input) {
        let tokens = line.split(' ')
        let name = tokens[0];

        if (tokens.length === 3) {
            let isIncludes = list.includes(name);

            if (!isIncludes) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`)
            }
        } else {
            // Премахване на стрингове от списък
            let indexOfPerson = list.indexOf(name);

            if (indexOfPerson !== -1) {
                list.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(list.join('\n'));
}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
])