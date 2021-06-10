require ('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, 
        pausa,
        leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');



const main = async() =>{

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        //Cargar Tareas
        tareas.cargarTareaFromArray( tareasDB );
        
    }
    

    do{
        //Imprimir el menu
        opt = await inquirerMenu();
        
        switch (opt) {
            case '1':
                //Crear Opcion
                    const desc = await leerInput('Descripción: ');
                    tareas.crearTarea( desc );
                break;

            case '2':
                tareas.listadoCompleto();
                
            break;
        
            
        }

        guardarDB( tareas.listadoArr );
        


        await pausa();

    } while (opt !=='0');

    

    //pausa();

}

main();




