const calcPercent = (value1, value2) => {
    var decreaseValue = value2 - value1
    const result = 100 - (decreaseValue / value2 * 100)
    return result.toFixed(0)
}

export default calcPercent;