//Importar FS 
const fs = require('fs');

//constante que contiene la ruta en donde se almacenara el archivo
const archivo = './db/data.json';

//Funcion para crear archivo JSON
const guardarDB = ( data ) => {

    //grabar archivo recibiendo como argumento la constante de la URL
    fs.writeFileSync( archivo, JSON.stringify(data) );

}

//Leer archivo JSON
const leerDB = () => {
    if(!fs.existsSync(archivo)){
    return null;
    }

    const info = fs.readFileSync( archivo, { encoding: 'utf-8' } );
    const data = JSON.parse(info);

    //console.log(data);

    return data;

}



module.exports = {
    guardarDB,
    leerDB
}