((a)=>{
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let  isPrime = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
let primeNumbers = numbers.filter(isPrime);

console.log( primeNumbers);
})();


