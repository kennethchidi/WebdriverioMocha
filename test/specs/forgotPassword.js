//Mocha Framework
//DESCRIBE  The area of the application I am focusing on
//IT Test Scenario

describe('Forgot Password', () => {
    it.skip('Check that user can reset password successfully', () => {
        browser.url('/index.php')


//      Locator identifiers
        const signIn = $('a[title=\'Log in to your customer account\']');
        const forgotPassw = $('#login_form > div > p.lost_password.form-group > a');
        const myEmail = $('#email');
        const retrievePassBtn = $('#form_forgotpassword > fieldset > p > button > span');

        signIn.click();
        browser.pause(3000);
        forgotPassw.click();
        //browser.pause(3000);
        myEmail.setValue('maxtest433@gmail.com');
        browser.pause(3000);
        retrievePassBtn.click();

    })
})
//allure generate && allure open
//npm install @wdio/allure-reporter --save-dev