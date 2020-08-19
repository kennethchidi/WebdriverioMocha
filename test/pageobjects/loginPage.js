class  loginPage {
    // locator identifiers

    get myEmail () {return $('#email') }
    get myPassword () {return $('#passwd') }
    get loginBtn () {return $('#SubmitLogin') }
    get signOut () {return $('#header > div.nav > div > div > nav > div:nth-child(2) > a') }



    login(email, password) {
        this.myEmail.setValue(email);
        this.myPassword.setValue(password);
        this.loginBtn.click();



    }
}

module.exports = new loginPage();
