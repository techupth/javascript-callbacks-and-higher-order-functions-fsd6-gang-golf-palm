//Exercise #2: At Least Five Function

function atLeastFive(array) {
  // Start coding here
  let found = [];
  for (let i = 0; i < array.length; i++) {
    found = array.filter((array) => array > 70);
  }
  return found.length;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function scoreRoom(array, callback, numbers) {
  if (callback(array) >= 5) {
    console.log(`ห้องเรียนที่ ${numbers} ผ่านเกณฑ์ ✅`);
  } else {
    console.log(`ห้องเรียนที่ ${numbers} ผ่านไม่เกณฑ์ ❌`);
  }
}

let scoreRoom1Result = scoreRoom(studentScoresRoom1, atLeastFive, 1);
let scoreRoom2Result = scoreRoom(studentScoresRoom2, atLeastFive, 2);
let scoreRoom3Result = scoreRoom(studentScoresRoom3, atLeastFive, 3);
