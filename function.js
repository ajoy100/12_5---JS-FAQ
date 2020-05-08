function evenify_all(nums){

        for(let i=0;i<nums.length;i++){
            const num=nums[i];

        if(num%2==0){
            console.log(num, ': is even number ');
        }
        else {
            console.log(num*2, ': is odd number ');
        }
    }
    

}

nums=[12,43,55,77,16,88,200];

 evenify_all(nums);




console.log("THIS IS ANOTHER")

friends_age=[22,33,35,28,16,88,223];
    evenify_all(friends_age);
    
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