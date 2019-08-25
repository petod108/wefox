var weFoxLoginpage = require('./WeFoxLoginpage');
var weFoxUserpage = require('./WeFoxUserpage');
var weFoxUserContracts = require('./WeFoxUserContracts');
var weFoxUserProfile = require('./WeFoxUserProfile');
var weFoxUserProfilePersonal = require('./WeFoxUserProfilePersonal');
var weFoxHomepage = require('./WeFoxHomepage');

describe('Protractor Demo App', function() {
  it('login to WeFox', function() {
    browser.ignoreSynchronization = true;

    weFoxLoginpage.get();
    expect(weFoxLoginpage.getPageTitle()).toEqual('Anmeldung – wefox');

    weFoxLoginpage.setUser('aqawefox+testtecnico@wefoxgroup.com');
    weFoxLoginpage.setPassword('demo1234');

    weFoxLoginpage.login();
    var userImage = weFoxUserpage.getUserImage();

    expect(userImage.getAttribute('title')).toEqual('AUTOMATIC DE QA');
    weFoxUserpage.gotoContracts();
    weFoxUserContracts.waitForPage();
    var contractEmpty = weFoxUserContracts.getEmpty();
    expect(contractEmpty).toContain('Keine Verträge hinzugefügt');
    weFoxUserpage.gotoProfile();

    weFoxUserProfile.gotoPersonalInformation();
    var userInformation = weFoxUserProfilePersonal.getUserInformation();
    weFoxUserpage.gotoLogout();
    weFoxHomepage.waitForPage();

  }, 360000);
});