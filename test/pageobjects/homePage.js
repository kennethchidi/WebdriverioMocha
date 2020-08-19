class HomePage {

    get signInBtn () {return $('#header > div.nav > div > div > nav > div.header_user_info > a') }


    signIn (){
        this.signInBtn.click();
    }
}

module.exports = new HomePage();
//a[title=\'Log in to your customer account\']
//#header > div.nav > div > div > nav > div.header_user_info > a
//button#SubmitLogin > span
//a[title='Log in to your customer account']
//button#SubmitLogin > span


