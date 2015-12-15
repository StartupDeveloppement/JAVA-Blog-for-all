var Router = require('abyssa').Router;

module.exports = Router()
    .configure({
        enableLogs: true,
        notFound: 'homepage'
    });