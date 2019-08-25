var WeFoxUserProfilePersonal = function() {
  
  var firstName = element(by.id('first_name'));
  var lastName = element(by.id('last_name'));
  var street = element(by.id('street'));
  var zipCode = element(by.id('zip_code'));
  var city = element(by.id('city'));
  var birthDate = element(by.id('birthdate'));
  var email = element(by.id('email'));
  var phone = element(by.id('phone'));

  this.getUserInformation = function() {
    firstNameValue = firstName.getAttribute('value');
    lastNameValue = lastName.getAttribute('value');
    streetValue = street.getAttribute('value');
    zipCodeValue = zipCode.getAttribute('value');
    cityValue = city.getAttribute('value');
    birthDateValue = birthDate.getAttribute('value');
    emailValue = email.getAttribute('value');
    phoneValue = phone.getAttribute('value');

    protractor.promise.all([firstNameValue, lastNameValue, streetValue, zipCodeValue, cityValue, birthDateValue, emailValue, phoneValue]).then(function (values) {
      var json = {};
      expect(values[0]).toContain('test');
      json['firstName'] = values[0];
      json['lastName'] = values[1];
      json['street'] = values[2];
      json['zipCode'] = values[3];
      json['city'] = values[4];
      json['birthDate'] = values[5];
      json['email'] = values[6];
      json['phone'] = values[7];
      console.log('Personal information: ' + JSON.stringify(json));
    });
  };
};
module.exports = new WeFoxUserProfilePersonal();