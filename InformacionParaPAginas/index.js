const fs = require('fs');
const axios = require('axios');


fs.readFile('pokemons.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const pokemonNames = data.split('\n');
  const randomIndex = Math.floor(Math.random() * pokemonNames.length);
  const randomPokemon = pokemonNames[randomIndex];

  console.log('Pokémon aleatorio:', randomPokemon);
});


const urls = [
    'https://random-data-api.com/api/v2/users',
    'https://random-data-api.com/api/v2/addresses',
    'https://random-data-api.com/api/v2/beers'
  ];

const results = [];

// Función para realizar las llamadas secuencialmente
const fetchDataSequentially = async () => {
    for (const url of urls) {
      try {
        const response = await axios.get(url);
        results.push(response.data);
        console.log('Respuesta de la API:', response.data);
      } catch (error) {
        console.error('Error al llamar a la API:', error);
      }
    }
  
    // Convertir los resultados a formato JSON
    const jsonData = JSON.stringify(results, null, 2);
  
    // Escribir los resultados en un archivo
    fs.writeFile('results.json', jsonData, 'utf8', (err) => {
      if (err) {
        console.error('Error al escribir el archivo:', err);
        return;
      }
      console.log('Los datos se han guardado en results.json');
    });
  };
  
  // Llamar a la función para realizar las llamadas secuencialmente
  fetchDataSequentially();