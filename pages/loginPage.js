class LoginPage {
    get username() { return $("//input[@id='user-name']"); }
    get password() { return $("//input[@id='password']"); }
    get loginButton() { return $("//input[@id='login-button']"); }
    get errorMessage() { return $("//h3[@data-test='error']"); }

    async open() {
        await browser.url('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }

    async clearInputs() {
        await this.username.clearValue();
        await this.password.clearValue();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
