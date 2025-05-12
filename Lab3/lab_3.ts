const lowerBound: number = 2, upperBound: number = 50;
const primeNumbers: number[] = [];

for (let num: number = lowerBound; num <= upperBound; num++) {
    if (num < 2) continue;
    let isPrime: Boolean = true;
    for (let i: number = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) primeNumbers.push(num);
}

console.log(`Prime numbers between ${lowerBound} and ${upperBound}: ${primeNumbers.join(", ")}\n`);


