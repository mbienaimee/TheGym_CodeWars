function validateNumber(number) {
  let cleanNumber = "";
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== "-") {
      cleanNumber += number[i];
    }
  }
  if (!cleanNumber) {
    return "Plenty more fish in the sea";
  }
  let startsWithPlus44 = cleanNumber.startsWith("+44");
  let startsWith07 = cleanNumber.startsWith("07");

  let length = cleanNumber.length;
  if (startsWithPlus44 && length !== 13) {
    return "Plenty more fish in the sea";
  } else if (startsWith07 && length !== 11) {
    return "Plenty more fish in the sea";
  } else if (!startsWithPlus44 && !startsWith07) {
    return "Plenty more fish in the sea";
  }

  let prefixLength = startsWithPlus44 ? 3 : startsWith07 ? 2 : 0;
  let isNumberValid = [...cleanNumber].every((char, index) => {
    if (index < prefixLength) {
      return true;
    } else {
      return !isNaN(char);
    }
  });

  if (isNumberValid) {
    return "In with a chance";
  } else {
    return "Plenty more fish in the sea";
  }
}
