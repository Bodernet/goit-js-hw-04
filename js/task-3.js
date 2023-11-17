// function filterArray(numbers, value) {
//   let newNumb = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newNumb.push(number);
//     }
//   }
//   return newNumb;
// }



console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"