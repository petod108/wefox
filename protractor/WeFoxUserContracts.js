var WeFoxUserContracts = function() {
  var listEmpty = element(by.css('div[v-selector=list-empty]'));
  var buttonAddContract = element(by.css('button[v-event*=state]'));

  this.getEmpty = function() {
    return listEmpty.getText();
  };

  this.waitForPage = function() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(buttonAddContract), 5000, 'Timeout while waiting for contracts');
  };
};
module.exports = new WeFoxUserContracts();