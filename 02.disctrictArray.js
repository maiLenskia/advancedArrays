function district(input) {
    const dis = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    let discrictNum = input.filter(dis).join(' ')
    console.log(discrictNum)
}
district([1, 2, 4, 3])