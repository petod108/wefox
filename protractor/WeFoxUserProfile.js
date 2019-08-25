var WeFoxUserProfile = function() {
  var personalDetails = element(by.css('a[data-track-event-action=PersonalDetails]'));

  this.gotoPersonalInformation = function() {
    personalDetails.click();
  };
};
module.exports = new WeFoxUserProfile();