//Exercise #2: At Least Five Function

function atLeastFive(array, operation,) {
    let count = 0;
    // Start coding here
    for (let i = 0; i < array.length; i++) {
      
      if (operation(array[i])) {
        count++;
      }
    }
    if (count >= 5) {
      return "ผ่าน";
    } else {
      return "ไม่ผ่าน";
    }
  }
  
function check (score){
  return score > 70;
}
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

// let scoreRoom1Result = [];
// let scoreRoom2Result = [];
// let scoreRoom3Result = [];


let scoreRoom1Result = atLeastFive(studentScoresRoom1,check)
  
  let scoreRoom2Result= atLeastFive(studentScoresRoom2,check)
  
  let scoreRoom3Result= atLeastFive(studentScoresRoom3,check)
  
  console.log("คุณภาพของนักเรียนในห้อง 1:", scoreRoom1Result);
  console.log("คุณภาพของนักเรียนในห้อง 2:", scoreRoom2Result);
  console.log("คุณภาพของนักเรียนในห้อง 3:", scoreRoom3Result);