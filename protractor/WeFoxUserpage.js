var WeFoxUserpage = function() {
  var menuButton = element(by.css('button[v-selector*=main-button]'));
  var menuOptionContracts = element(by.css('a[icon=contracts]'));
  var menuOptionProfile = element(by.css('a[icon=profile]'));
  var menuOptionLogout = element(by.css('a[icon=logout]'));
  var userImage = element(by.tagName('img'));

  this.gotoContracts = function() {
    menuOptionContracts.click();
  };

  this.gotoProfile = function() {
    menuOptionProfile.click();
  };

  this.gotoLogout = function() {
    menuOptionLogout.click(); 
  };

  this.getUserImage = function() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(userImage), 9000, 'Timeout while waiting for login');
    return userImage; 
  };
};
module.exports = new WeFoxUserpage();