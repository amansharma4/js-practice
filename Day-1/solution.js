// write all your solution here.

function question1(value) {
  if (value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

function question2(a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
}

function question3() {
  for (let x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
      result.push("-", str[x]);
    } else {
      result.push(str[x]);
    }
  }
}

const answer1 = question1("pass sample input");
const answer2 = question2("pass sample input");
const answer3 = question3("pass sample input");

console.log(answer1);
console.log(answer2);
console.log(answer3);
