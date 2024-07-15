class LoginPage {
    get username() { return $("//input[@id='user-name']"); }
    get password() { return $("//input[@id='password']"); }
    get loginButton() { return $("//input[@id='login-button']"); }
    get errorMessage() { return $("//h3[@data-test='error']"); }

    open() {
        browser.url('https://www.saucedemo.com/');
    }

    login(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.loginButton.click();
    }

    clearInputs() {
        this.username.clearValue();
        this.password.clearValue();
    }

    getErrorMessage() {
        return this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
