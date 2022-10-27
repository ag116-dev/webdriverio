const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{

        reporters: ['spec', ['light', {
            outputDir: 'Results',
            outputFile: "demo",    // html report file will be name this 
            addScreenshots: true,   // to add screenshots in report make it as true. Default is false
            autoClean: false       // report folder is clean by default or when set true. Provide false if you dont want to clean the folder on each run.
        }]
        ],

        onComplete: function (exitCode, config, capabilities, results) {
            const mergeResults = require("wdio-light-reporter/src/mergeResults"); //you can add this on top of the file
            mergeResults('Results');
        },

    }
}

