function minMax(arr){
  
    const maxx = Math.max(...arr)
    const minn = Math.min(...arr)

return [minn,maxx];
}
console.log(minMax([1,2,3,4,5]))