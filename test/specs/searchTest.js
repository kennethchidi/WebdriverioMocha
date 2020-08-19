//const expectChai = require('chai').expect;

describe('searchTest', () => {
     it.skip('Check that user is able to search for item successfully', () => {
         browser.url('/index.php?controller=my-account')  // /index.php?controller=my-account

         const signIn = $('a[title=\'Log in to your customer account\']');
         const myEmail = $('#email');
         const myPassword = $('#passwd');
         const signInBtn = $('#SubmitLogin');
         const searchDress = $('#search_query_top');
         const searchBtn = $('#searchbox > button');
         const blouse = $('#best-sellers_block_right > div > ul > li:nth-child(3) > a > img');
         const addToCart = $('#add_to_cart > button > span');
         const proceedToCheckoutBtn = $('a[title=\'Proceed to checkout\'] > span');
         const proceedToCheckout = $('div#center_column  a[title=\'Proceed to checkout\'] > span');
         const toCheckout = $('div#center_column > form[method=\'post\']  button > span');
         const checkBox = $('#cgv');
         const checkOut = $('form#form  button > span');
         const payByCheck = $('a[title=\'Pay by check.\']');
         const confirmOrder = $('p#cart_navigation  span');
         //const OrderConfirmationMsg = $('div#center_column > .alert.alert-success');



         signIn.click();
         browser.pause(3000);
         myEmail.setValue('maxtest433@gmail.com'); //smith530@gmail.com
         myPassword.setValue('Friday24');  //Upward!
         signInBtn.click();
         browser.pause(3000);
         searchDress.setValue('dress');
         searchBtn.click();
         browser.pause(3000);
         blouse.click();
         browser.pause(3000);
         addToCart.click();
         browser.pause(3000);
         proceedToCheckoutBtn.click();
         browser.pause(3000);
         proceedToCheckout.click();
         browser.pause(3000);
         toCheckout.click();
         checkBox.click();
         checkOut.click();
         payByCheck.click();
         confirmOrder.click();
         //OrderConfirmationMsg.waitForDisplayed(1000);

      })
})


