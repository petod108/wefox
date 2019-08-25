var WeFoxLoginpage = function() {
  var userInput = element(by.name('user_name'));
  var passwordInput = element(by.name('password'));
  var loginButton = element(by.css('button[type=submit]'));

  this.get = function() {
    browser.get('https://my.wefox.de/login');
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(userInput), 5000, 'Wait for login page');
  };

  this.setUser = function(user) {
    userInput.sendKeys(user);
  };

  this.setPassword = function(password) {
    passwordInput.sendKeys(password);
  };

  this.login = function() {
    loginButton.click();
  };
  
  this.getPageTitle = function() {
    return browser.getTitle();
  };
};
module.exports = new WeFoxLoginpage();