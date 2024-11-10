export default class PhoneNumberValidation {
  static validate(phoneObject) {
    const phoneUtil =
      require("google-libphonenumber").PhoneNumberUtil.getInstance();
    if (phoneObject.formatted && phoneObject.countryCode) {
      const number = phoneUtil.parseAndKeepRawInput(
        phoneObject.formatted,
        phoneObject.countryCode
      );
      return phoneUtil.isValidNumber(number);
    } else {
      return false;
    }
  }
}
