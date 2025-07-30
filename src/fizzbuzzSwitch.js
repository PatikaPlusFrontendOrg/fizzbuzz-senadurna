function fizzbuzzSwitch(num) {
  let result = "";

  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      result = "FizzBuzz";
      break;
    case num % 3 === 0:
      result = "Fizz";
      break;
    case num % 5 === 0:
      result = "Buzz";
      break;
    default:
      result = num;
  }

  return result;
}

module.exports = fizzbuzzSwitch;
