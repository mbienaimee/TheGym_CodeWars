var isAnagram = function(test, original) {
    let tes =test.toUpperCase().split('').sort().join('')
    let orig = original.toUpperCase().split('').sort().join('')
     return tes === orig
   };
   console.log(isAnagram("foefet","toffee"))