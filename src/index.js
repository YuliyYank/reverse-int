module.exports = function reverse (n) {
    var reversedString = n.toString().split('').reverse('').join('');
    return parseFloat(reversedString);
}