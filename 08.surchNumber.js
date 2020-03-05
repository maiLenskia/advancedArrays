function solve(numbers, params) {
    let [take, remove, searchedNum] = params;
    let takenNums = numbers.slice(0, take);
    let deleteFromTakenNums = takenNums.splice(0, remove);
    let counter = 0;

    let repeatedNums = takenNums.filter(function(num) {
        if (num === searchedNum) {
            counter++;
        }
    })

    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}