const LoginPage = require('../pageobjects/login.page');
const SearchFormPage = require('../pageobjects/search.page');


describe('Login page', () => {
  before(async () => {
    await LoginPage.open();
  });

  it('should allow a user to log in successfully', async () => {
    await LoginPage.login('Admin', 'Admin@Navi');
  });   

  it('should open search form and perform spent bonus filtering', async () => {
    await SearchFormPage.performSpentBonusFilter();

  });



  
});