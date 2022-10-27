const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it.skip('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('open toolsqa', async () => {
        await browser.url(`https://www.toolsqa.com/katalon-studio/test-automation-framework-complete-guide/`)
    });

    it('open google', async () => {
        await browser.url(`https://www.google.com/`)
    });
});


