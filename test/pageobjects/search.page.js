const Page = require('./page');

class SearchFormPage extends Page {
  get searchForm() { return $('.search-form.user-search-form.with-options'); }
  get spentBonusFilter() { return $('app-client-total-bonus-spent-filter'); }
  get option5001() { return $('/html/body/app-root/app-clients/header/aside/div[1]/app-client-total-bonus-spent-filter/div/div[2]/div[3]'); }

  

  async performSpentBonusFilter() {
    await this.searchForm.click();
    await this.spentBonusFilter.waitForDisplayed({ timeout: 5000 });
    await this.spentBonusFilter.click();
    await this.option5001.waitForDisplayed({ timeout: 5000 });
    await this.option5001.click();
    await browser.pause(10000);
  }
}

module.exports = new SearchFormPage();