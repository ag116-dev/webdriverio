const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{

        reporters:
            [
                ['allure', {
                    outputDir: 'allure-results',
                    disableWebdriverStepsReporting: true,
                    disableWebdriverScreenshotsReporting: true,
                }]
            ],

    }
}

