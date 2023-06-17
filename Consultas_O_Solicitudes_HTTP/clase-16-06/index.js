const axios = require('axios');
var utils = require('./utils')

   axios.get('https://pokeapi.co/api/v2/pokemon/ditto') 
    .then( (datos)  => {
    // handle success
    console.log(datos.data.stats);
    })
    .catch( () => {
    // handle error
    console.log(error);
    })
    .finally( () => {
    // always executed
    });
 

//-----------------------------------------------------------------------------------------

   const solicitudGet = async  () => { //Asinc se utiliza para retornar una promesa 
    const datos = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto') 
    console.log('solicitudGet' +datos.data.stats)
   }
   solicitudGet()

//-----------------------------------------------------------------------------------------

   const solicitudGetParametro = async  (nombrePokemon ) => { //Asinc se utiliza para retornar una promesa 
    const datos = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`) 
    console.log('solicitudGetParametro' +datos.data.stats)
   }
   solicitudGetParametro('pikachu')

   //-----------------------------------------------------------------------------------------

   const solicitudGetInstancia =  async  (nombrePokemon) => { //Asinc se utiliza para retornar una promesa 
const instance = axios.create({
    baseURL: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
});
    const datos = await instance.get(); 
    console.log(datos)
   }

   solicitudGetInstancia('pikachu')

//------------------------------------------------------------------------------------------

   const solicitudAsyncLista =  async  () => { //Asinc se utiliza para retornar una promesa 
    const instance = axios.create({
        baseURL: `https://pokeapi.co/api/v2/pokemon`,
        params: {
            limit:1000000,
            offset: 0
        }
    });
        const datos = await instance.get(); 
        console.log(datos.data)
       }

    solicitudAsyncLista()  


console.log(utils.queDiaFue(3,'ruso')+' Ese Día');
console.log(utils.queDiaFue(3, 'esperanto')+' Ese Día');