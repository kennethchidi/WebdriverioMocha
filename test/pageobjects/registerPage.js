class  registerPage {

    get creatEmail () {return $('#email_create') }
    get creatAccountBtn () {return $('#SubmitCreate > span') }
    get genderBtn () {return $('#id_gender1') }
    get firstName () {return $('#customer_firstname') }
    get lastName () {return $('#email_create') }
    get password () {return $('#passwd') }
    get daysBtn () {return $('#days > option:nth-child(11)') }
    get monthBtn  () {return $('#months > option:nth-child(2)') }
    get yearBtn  () {return $('#years > option:nth-child(4)') }
    get company  () {return $('#company') }
    get address1  () {return $('#address1') }
    get address2  () {return $('#address2') }
    get city  () {return $('#city') }
    get state  () {return $('#id_state > option:nth-child(46)') }
    get postcode  () {return $('#postcode') }
    get phoneNumber () {return $('#phone_mobile') }
    get registerBtn () {return $('#submitAccount > span') }
    get messageConfirmationTest () {return $('#center_column > p')}


    registerTest (randomEmail, randomfirstName, randomlastName) {
        this.creatEmail.setValue(randomEmail);
        this.creatAccountBtn.click();
        browser.pause(3000);
        this.genderBtn.click();
        this.firstName.setValue(randomfirstName);
        this.lastName.setValue(randomlastName);
        this.password.setValue(Friday24);
        $('#days').selectByIndex(10);
        $('#months').selectByIndex(1);
        $('#years').selectByIndex(3);
        this.company .setValue('UBA Ltd');
        this.address1 .setValue('25');
        this.address2 .setValue('houston avenue ')
        this.city.setValue('Houston');
        $('#id_state').selectByIndex(43);
        this.postcode .setValue('77017');
        this.phoneNumber  .setValue('+17133504549');
        this.registerBtn.click();
        browser.pause(3000);
        const messageReceived = this.messageConfirmationTest.getText();
        console.log('New user confirmed seeing '+messageReceived);
        expectChai ('Welcome to your account. Here you can manage all of your personal information and orders.', messageReceivedessage);
    }
}
module.exports = new registerPage();







