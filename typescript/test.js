function moveIndexes(nums){
        for (let j=0; j < nums.length ; j++){
            if (nums[j] == 0 && j <= nums.length-2) { 
                nums[j] = nums[j] + nums[j+1];
                nums[j+1] = nums[j] - nums[j+1];
                nums[j] =nums[j] - nums[j+1] ;
            }
        }        

    console.log(nums);
}

nums = [1,2,0,4,5]; 
moveIndexes(nums);

