// Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}


var nums=[1,2,8,9,12,46,76,82,15,20,30]

var n=[1,2,3,4,5,6,7,8,9]

var out=[""]

for(let i=0;i<=(n.length-1);i++){
    let count=0
    for(let j=0;j<=nums.length;j++){
        if(nums[j]%n[i]==0){
            count++
        }
    }
    console.log(`${n[i]}:${count},`);
}

