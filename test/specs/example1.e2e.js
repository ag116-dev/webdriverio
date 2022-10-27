const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('open google', async () => {
        await browser.url(`https://www.google.com/`)
    });
});


