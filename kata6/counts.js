//return the total number of smiling faces in the array
function countSmileys(arr) {
    const validd = [':)',':D',';-D',':~',';)',';-',':-',':-D',';~)',':~)',';~D',';~D',':-)',';~~D',';-)']
    count=0
    const smile = arr.map((char)=>{
        if(validd.includes(char)){
            count+=1
        }
    })
        return count
  }
  console.log(countSmileys([':)', ';(', ';}', ':-D']))
  