function sortArr(input) {
    let sorted = input.sort(names)

    console.log(sorted.join('\n'))

    function names(a, b) {
        let result = a.length - b.length;

        if (result === 0) {
            return a.localeCompare(b)
        }

        return result;
    }
}
sortArr(["alpha", "beta", "gamma"])