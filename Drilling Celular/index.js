const uniq = require('lodash/uniq');
var datos = require('./celular');


const celularUnicos = uniq(datos.getCelular());

var nuevoCelular = {
  ...datos.getCelular(),
  color: 'Negro',
  modelo: 'iPhone 13'
};

const mostrarNuevoCelular = () =>{
    console.log(nuevoCelular);
    }



setTimeout(mostrarNuevoCelular,2000)



