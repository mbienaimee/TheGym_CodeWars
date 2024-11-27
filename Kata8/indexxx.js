function sumArray(array) {
    if (!array || array.length <= 1) {
       return 0;
   }

   let workingArray = [...array];
   const min = Math.min(...workingArray);
   
   const minIndex = workingArray.indexOf(min);
   if (minIndex !== -1) {
       workingArray.splice(minIndex, 1);
   }

   const max = Math.max(...workingArray);
   const maxIndex = workingArray.indexOf(max);
   if (maxIndex !== -1) {
       workingArray.splice(maxIndex, 1);
   }

   return workingArray.reduce((a, b) => a + b, 0);
}

console.log(sumArray([ 0, 1, 6, 10, 10 ]));