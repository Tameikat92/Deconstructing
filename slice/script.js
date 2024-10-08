
let pies = ["pumpkin","apple","sweet potato","key lime","cherry","date pie","yam pie"];

let slicedPies = pies.slice(1,3);
/*
Explanation:

    pies.slice(1, 3) extracts elements starting from index 1 
    ("banana") up to index 3 ("cherry", but does not include "date").
    The original array fruits remains unchanged.

*/

console.log(slicedPies);
console.log("--------------");
console.log(pies);

const[first, ...remainingPies] = pies; // remaining pies is a new array that the rest populator is creator

console.log(first);
console.log(remainingPies);

