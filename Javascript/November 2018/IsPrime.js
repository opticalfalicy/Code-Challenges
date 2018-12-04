// Is Prime
// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// bool isPrime(5) = return true
// mov edi, 1
// call is_prime    ; EAX <- 0 (false)

// mov edi, 2
// call is_prime    ; EAX <- 1 (true)

// mov edi, -1
// call is_prime    ; EAX <- 0 (false)
// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

function isPrime(num) {
    // Loop up to the given number minus one
    // (a prime will only be divisible by one and itself, so we don't need to test the number itself)
    for(let i = 2; i < num; i++){
      // If the given number's remainder results in a 0 we will break, because the number is not prime)
      if(num % i === 0){
        return false;
      }
    }
    // 1 is not a prime number, so we only return true if the given number is greater than 1 and prime.
    return num > 1
  }