function getRandomNumberElement(randomNumbers) {
    var randomIndex = Math.floor(Math.random() * randomNumbers.length);
    return randomNumbers[randomIndex];
}
var randomNumbers = [1, 5, 7, 4, 3, 9];
console.log(getRandomNumberElement(randomNumbers));
function getRandomStringElement(randomStrings) {
    var randomIndex = Math.floor(Math.random() * randomStrings.length);
    return randomStrings[randomIndex];
}
var colors = ["red", "green", "blue"];
console.log(getRandomStringElement(colors));
