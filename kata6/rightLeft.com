function leftRightOrBoth(text) {
    if (!text || text.trim() === "") {
        return "";
    }
    
    const left = new Set(['1','2','3','4','5','q','w','e','r','t','a','s','d','f','g','z','x','c','v','b']);
    const right = new Set(['6','7','8','9','0','y','u','i','o','p','h','j','k','l','\'',';','n','m',',','.','/','^','&','*','(',')',]);
    
    let leftUsed = false;
    let rightUsed = false;
    
    for (let char of text.toLowerCase()) {
        if (char === ' ') continue;
        
        if (left.has(char)) {
            leftUsed = true;
        } else if (right.has(char)) {
            rightUsed = true;
        }
        
        if (leftUsed && rightUsed) {
            return "Both";
        }
    }
    
    if (leftUsed) return "Left";
    if (rightUsed) return "Right";
    return "";
}