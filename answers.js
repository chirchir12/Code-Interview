// 1. How do you swap two numbers without using the third variable?

var a=1
var b=2
// swap using descructuring
[a, b] = [b, a];
// b = 1

//2.  How do you find the duplicate number on a given integer array?

const my_array = [1,5,7,2,4,5,6,7,4,2]
//sort array and check if the no before is duplicate
const sorted_aaray = my_array.sort()
const duplicates = []
for(let i=0;i<sorted_aaray.length;i++){
    // check for consecutive nos
    if(sorted_aaray[i]===sorted_aaray[i+1]){
        duplicates.push(sorted_aaray[i])
    }
}
// [2, 4, 5, 7]

// 3 Can you convert this recursion function into a loop?
//      A(x) {
//          if x<0 return 0;

//         return something(x) + A(x-1)

//       }






