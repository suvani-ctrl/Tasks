
function FindingPair(nums)
{

    for(let i = 0; i<=nums.length - 1; i++)
    {
        for(let j = 1; j<= nums.length - 1; j++)
        {
            if(nums[i] + nums[j] === target)
            {
                return (nums[i][j])
            }
        }
    }

}

console.log(nums([8,7,2,5,3]))