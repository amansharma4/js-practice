// write all your solution here.
//Solution1
function question1(value) {
  if (value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}
const ans1 = [58, "", "abcd", true, null, false, 0];

//Solution 2
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
function question2(a, b) {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
}

//Solution 3
function question3() {
  for (let x = 1; x < str.length; x++) {
    if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
      result.push("-", str[x]);
    } else {
      result.push(str[x]);
    }
  }
}

const answer1 = ans1.filter(question1);
const answer2 = library.sort(question2);
const answer3 = question3(25468);

console.log(answer1);
console.log(answer2);
console.log(answer3);
