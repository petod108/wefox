var WeFoxUserHomepage = function() {
  var logo = element(by.css('img[alt*=\'wefox DE\']'));
  this.waitForPage = function() {
  var EC = protractor.ExpectedConditions;
  browser.wait(EC.visibilityOf(logo), 15000, 'Timeout while waiting for homepage');
    expect(browser.getCurrentUrl()).toEqual('https://www.wefox.de/');
  };
};
module.exports = new WeFoxUserHomepage();