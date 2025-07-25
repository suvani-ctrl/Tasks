function findingPair(nums)
{

    let target = 10;
    let mySet = new Set(nums)
    for(let i = 0 ; i<=nums.length-1 ; i++)
    {
        let  remainingNum = target - nums[i];
        
        if(mySet.has(remainingNum))
        {
            return ([nums[i], remainingNum])
        }
    }
      
}
console.log(findingPair([8, 7, 2, 5, 3, 1]))




