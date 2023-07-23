// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInArray(array) {
    let min = Math.ceil(0);
    let max = Math.floor(array.length);
    let i = Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    return array[i]
}

export { getRandomInArray }