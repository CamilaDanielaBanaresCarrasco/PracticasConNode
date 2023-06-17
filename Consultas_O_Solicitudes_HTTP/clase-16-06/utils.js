const moment = require('moment');
var config = require('./config.js')


function queDiaFue(dias,idioma){
    moment.locale(config.idiomas[idioma]);
    return moment().subtract(dias,'days').calendar()
}

module.exports = {queDiaFue: queDiaFue}