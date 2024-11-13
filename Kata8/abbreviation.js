function abbrevName(name){
    const splitting = name .split(" " )
    const differ = splitting[0].charAt(0)
    const upperk = differ.toUpperCase()
    const diff = splitting[1].charAt(0).toUpperCase()
    return `${upperk}.${diff}`

    // code away
  

}
console.log(abbrevName('marie reine'))