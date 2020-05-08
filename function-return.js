
function evenify(num){
    var result;
    if(num%2==0){
       result=num;
    }
    else {
        result= num*2;
    }
    
    return result;
}

 var result =evenify(8);
 var square=result*result;
 console.log('square' , square);

function evenify_all(nums){
    var even_array=[] ;
    for(let i=0;i<nums.length;i++){
        const num=nums[i];
        var result= evenify(num);
        even_array.push(result);
    
    }
    return even_array;
}


var nums=[12,43,55,77,16,88,200];
var nums_even=evenify_all(nums);
console.log(nums_even);

  





console.log("THIS IS ANOTHER")

var friends_age=[22,33,35,28,16,88,223];
var even_friends =evenify_all(friends_age);
console.log(even_friends);

// friends_age=[22,33,35,28,16,88,223];
// for(let i=0;i<friends_age.length;i++){
//     const age=friends_age[i];

//     evenify(age);

// }





// friends_age=[22,33,35,28,16,88,223];
// for(let i=0;i<friends_age.length;i++){
//     const age=friends_age[i];

//     if(age%2==0){
//         console.log(age, ': is even number ');
//     }
//     else {
//         console.log(age*2, ': is odd number ');
//     }

// }