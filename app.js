
import { makeSearch} from "./search.js";
document.querySelector('.search').addEventListener('keyup', validateSearch);



function validateSearch(event) {
    
    let key = event.key
    let value = document.querySelector('.search').value

    if (key == 'Backspace' && value.length == 0 ) {
        console.log('deberia limpiar el contenedor')
        document.querySelector('.show_results').innerHTML = '';
    }

   
    if (value.length >=3) {
        makeSearch(value)
        console.log( 'debo iniciar la busqueda, pensar como no hacer miles de peticiones :(');
        console.log(value)
    }
   
    
    
}

