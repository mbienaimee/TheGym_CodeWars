function gimme(triplet) {

    const sorted = [...triplet].sort((a, b) => a - b);
    const middleElement = sorted[1]; 

    return triplet.indexOf(middleElement);
}


console.log(gimme([2, 3, 1]));

