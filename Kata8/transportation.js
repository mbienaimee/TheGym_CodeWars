function rentalCarCost(d) {
    // Your solution here
    let amount =0;
    let renting = (40*d)
    if(d >= 3 && d<7){
     amount =renting -20
      
    }
    else if(d>=7){
       amount = renting-50
    }
    else{
      amount = renting;
    }
    return amount
    
  }
  console.log(rentalCarCost(7))