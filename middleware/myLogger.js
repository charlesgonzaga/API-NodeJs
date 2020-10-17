const moment = require('moment')

const myLogger = (req, res, next) => {
    var dataAtual = moment().format()
    console.log(`[Log: ${dataAtual}] ${req.method} ${req.headers.host + req.url}`)
    next()
};

module.exports = myLogger
