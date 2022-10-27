const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{

        reporters: [
            'dot',
            'junit'
        ],

    }
}

