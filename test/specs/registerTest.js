var faker = require('faker');
const expectChai = require('chai').expect;


const homepage = require('..\\pageobjects\\homePage');
const registerPage = require('..\\pageobjects\\registerPage');


describe('registerTest', () => {
    var randomfirstName = faker.name.firstName();
    var randomlastName = faker.name.lastName();
    var randomEmail = faker.internet.email();

    it('Check that New user can Register Account successfully', () => {
        browser.url('/index.php')
        expect(browser).toHaveTitle('My Store');
        homepage.signIn();
        browser.pause(3000);
    })
})

// var faker = require('faker');
// const expectChai = require('chai').expect;
//
//  describe('RegisterTest', () => {
//      var randomfirstName = faker.name.firstName(); // Rowan
//      var randomlastName = faker.name.lastName(); // Luke
//      var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
//
//      it.skip('Check that New user can Register Account successfully', () => {
//          browser.url('/index.php')
//
//        //Locator identifiers
//           const signIn = $('a[title=\'Log in to your customer account\']');
//           const creatEmail = $('#email_create');
//           const creatAccountBtn = $('#SubmitCreate > span');
//           const genderBtn = $('#id_gender1');
//           const firstName = $('#customer_firstname');
//           const lastName = $('#customer_lastname');
//           const password = $('#passwd');
//           const daysBtn = $('#days > option:nth-child(11)');
//           const monthBtn = $('#months > option:nth-child(2)');
//           const yearBtn = $('#years > option:nth-child(4)');
//           const company = $('#company');
//           const address1 = $('#address1');
//           const address2 = $('#address2');
//           const city = $('#city');
//           const state = $('#id_state > option:nth-child(46)');
//           const postcode =$('#postcode');
//           const phoneNumber =$('#phone_mobile');
//           const registerBtn =$('#submitAccount > span');
//           const messageConfirmationTest = $('#center_column > p')}
//
//
//          signIn.click();
//          creatEmail.waitForDisplayed(3000);
//          creatEmail.setValue(randomEmail);
//          creatAccountBtn.click();
//          browser.pause(3000);
//          genderBtn.click();
//          firstName.setValue(randomfirstName);
//          lastName.setValue(randomlastName);
//          password.setValue('Upward!');
//          $('#days').selectByIndex(10);
//          $('#months').selectByIndex(1);
//          $('#years').selectByIndex(3);
//          company.setValue('UBA Ltd');
//          address1.setValue('25');
//          address2.setValue('houston avenue ');
//          city.setValue('Houston');
//          $('#id_state').selectByIndex(43);
//          postcode.setValue('77017');
//          phoneNumber.setValue('+17133504549');
//          registerBtn.click();
//          browser.pause(3000);
            //const messageReceived = this.messageConfirmationTest.getText();
//          console.log('New user confirmed seeing '+messageReceived);
//          expectChai ('Welcome to your account. Here you can manage all of your personal information and orders.', messageReceivedessage);
//
//
//
//      })
//  })