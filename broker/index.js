let SSL_KEY = __dirname + '/certs/key.pem';
let SSL_CERT = __dirname + '/certs/certificate.pem';
let MONGOURL = 'mongodb://127.0.0.1:10000/iotfwjs';

module.exports = {
    id: 'broker',
    stats: false,
    port: 8443,
    logger: {
        name: 'iotfwjs',
        level: 'debug'
    },
    secure: {
        keyPath: SSL_KEY,
        certPath: SSL_CERT,
    },
    backend: {
        type: 'mongodb',
        url: MONGOURL
    },
    persistence: {
        factory: 'mongo',
        url: MONGOURL
    }
};