function findNeedle(haystack) {
    // your code here
    let position = haystack.indexOf("needle")
    
    return `found the needle at position ${position}`
    
    
  }
  console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
  