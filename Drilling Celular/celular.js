const moment = require('moment');


const getCelular =() => {

    let celular = {
        marca: 'Apple',
        modelo: 'iPhone 12',
        color: 'Azul',
        capacidad: '128GB',
        sistemaOperativo: 'iOS',
        fechaCompra: moment().format('DD-MM-YYYY')  // Genera la fecha actual con moment
      };
      console.log(celular);
return celular
}


  module.exports = {getCelular};