function containsDuplicate(nums: number[]): boolean {
   const sortedArr=nums.sort((a,b)=>a-b);
   for(let i=0;i<sortedArr.length-1;i++){
       if(sortedArr[i]===sortedArr[i+1]){
           return true;
       }
   } 
  return false;
};
