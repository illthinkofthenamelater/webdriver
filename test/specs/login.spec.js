const LoginPage = require('../../pages/loginPage');

describe('Login tests', () => {

    before(() => {
    // Code that uses the browser object (e.g., navigating to the URL)
    browser.url('https://www.saucedemo.com/');
  });

  beforeEach(() => {
    loginPage = new LoginPage(); // Create a new instance of LoginPage
  });

    const username = 'standard_user'; // Valid username
    const password = 'secret_sauce';


    it('UC-1: Empty Credentials', async () => {
        await loginPage.clearInputs();
        await loginPage.loginButton.click();
        const errorMsg = await loginPage.getErrorMessage();
        expect(errorMsg).toContain('Username is required');
    });

    it('UC-2: Empty Password', async () => {
        await loginPage.username.setValue(username);
        await loginPage.password.clearValue();
        await loginPage.loginButton.click();
        const errorMsg = await loginPage.getErrorMessage();
        expect(errorMsg).toContain('Password is required');
    });

    it('UC-3: Valid Credentials', async () => {
        await loginPage.username.setValue(username);
        await loginPage.password.setValue(password);
        await loginPage.loginButton.click();
        const title = await browser.getTitle();
        expect(title).toEqual('Swag Labs');
    });
});

