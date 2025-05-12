var lowerBound = 2, upperBound = 50;
var primeNumbers = [];
for (var num = lowerBound; num <= upperBound; num++) {
    if (num < 2)
        continue;
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
        primeNumbers.push(num);
}
console.log("Prime numbers between ".concat(lowerBound, " and ").concat(upperBound, ": ").concat(primeNumbers.join(", ")));
