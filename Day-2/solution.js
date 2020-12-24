// write all your solution here.

//Solution 1
function question1(input) {
  if (Array.isArray(input)) return true;

  return false;
}
//Solution 2
function question2(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
}

//Solution 3
function question3(input) {
  let input2 = input.map(function (elem) {
    return elem.replace("-", "/");
  });
  console.log(input2);
}

//Solution 4
function question4(input) {
  arr = input.map((num) => Math.ceil(num));
  return arr;
}

// Solution 5

// using filter
function question5(input) {
  postiveArr = input.filter((num) => num > 0);
  return postiveArr;
}

// using map
function question5(input) {
  let negArr = [];
  input.map((num) => {
    if (num > 0) {
      fillarr.push(num);
    }
  });
  return negArr;
}

const answer1 = question1("w3resource");
const answer2 = question2([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);
const answer3 = question3(["08-14", "10-04", "04-21"]);
const answer4 = question4([1.5, 2.56, 5.1, 12.33]);
const answer5 = question5([-4, 3, 2, -21, 1]);

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);
