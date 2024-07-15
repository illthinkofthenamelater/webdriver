const LoginPage = require('../../pages/loginPage');

describe('Login form tests', () => {

    const loginData = [
        { username: '', password: '', error: 'Username is required' },
        { username: 'standard_user', password: '', error: 'Password is required' },
        { username: 'standard_user', password: 'secret_sauce', title: 'Swag Labs' }
    ];

    loginData.forEach((data, index) => {
        it(`should handle login case ${index + 1}`, () => {
            LoginPage.open();
            if (data.username) LoginPage.username.setValue(data.username);
            if (data.password) LoginPage.password.setValue(data.password);
            LoginPage.loginButton.click();

            if (data.error) {
                expect(LoginPage.getErrorMessage()).toContain(data.error);
            } else {
                expect(browser.getTitle()).toBe(data.title);
            }
        });
    });

});
