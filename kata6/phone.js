function validPhoneNumber(phoneNumber) {
  let reg = /^\([0-9]{3}\)\ [0-9]{3}\-[0-9]{4}$/;
  return reg.test(phoneNumber);
}
