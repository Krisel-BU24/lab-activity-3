// Student ID: 2024-01-10609
const basenum = 9;

// Prob 1
function calculateGrade(score) {
  if (score >= 90 && score <= 100) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
}

const score = basenum * 10 + 5;
console.log(`Score = ${score} Grade = ${calculateGrade(score)}`);

// Prob 2
function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

showStars(basenum + 2);

// Prob 3
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

const numberToCheck = basenum + 10;
console.log(isPrime(numberToCheck) ? 'Prime' : 'Not prime');

// Prob 4
function multiplicationTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

multiplicationTable(basenum);
