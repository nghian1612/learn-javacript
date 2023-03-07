// so tang  dan
function isIncreasingNumber(n) {
  if (n < 10) return false;
  const str = n.toString();
  for (let i = 1; i < str.length; i++) {
    if (str[i] <= str[i - 1]) {
      return false;
    }
  }
  return true;
}

isIncreasingNumber(1231);
isIncreasingNumber(1);
// so giam dan
function isDecreasingNumber(n) {
  if (n < 10) return false;
  const str = n.toString();
  for (let i = 1; i < str.length; i++) {
    if (str[i] >= str[i - 1]) {
      return false;
    }
  }
  return true;
}
// isDecreasingNumber(321);
// isDecreasingNumber(123);

// so tang dan khoang x
function isIncreasingNumberByDistance(n, x) {
  if (!isIncreasingNumber(n)) return false;
  const str = n.toString();
  for (let i = 1; i < str.length; i++) {
    if (str[i] - str[i - 1] !== x) {
      return false;
    }
  }
  return true;
}
// isIncreasingNumberByDistance(11, 2);
// isIncreasingNumberByDistance(135, 2);
// isIncreasingNumberByDistance(1345, 1);

//Kiểm tra số nguyên tố
function isPrime(n) {
  if (n < 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// isPrime(4);
// isPrime(11);

//Kiểm tra số chính phương
function isPerfectSquare(n) {
  if (n < 1) return false;
  if (Math.sqrt(n) % 1 === 0) {
    console.log(true);
    return true;
  }
  return false;
}
// isPerfectSquare(4);

//Kiểm tra số hoàn hảo
function isPerfectNumber(n) {
  if (n < 0) return false;
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum === n) {
    return true;
  }
  return false;
}

//Kiểm tra số đối xứng
function isSymetricNumber(n) {
  if (n < 1) return false;
  const str = parseInt(n.toString().split("").reverse().join(""));
  if (str === n) {
    console.log(true);
    return true;
  }
  return false;
}
// isSymetricNumber(12321);

//Kiểm tra số có tổng chữ số chia hết cho 10
function isDivisibleBy10(n) {
  if (n < 10) return false;
  let sum = 0;
  const num = n.toString();
  for (let i = 0; i < num.length; i++) {
    sum += num[i]++;
  }
  if (parseInt(sum) % 10 === 0) {
    return true;
  }
  return false;
}
// isDivisibleBy10(191919191919191919191);

// Kiểm tra số có tổng của 2 chữ số bằng số cho trước
function hasTwoDigitsWithSum(n, sum) {
  if (n < 10) return false;

  const digits = n.toString();
  for (let i = 0; i < digits.length - 1; i++) {
    for (let j = i + 1; j < digits.length; j++) {
      if (parseInt(digits[i]) + parseInt(digits[j]) === sum) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
}
// hasTwoDigitsWithSum(123, 5);

//
