let parOdis = prompt('scegli pari o dispari')

let numeroUtente = parseInt(prompt('scegli un numero da 1 a 5 '))


let computerNumero = Math.floor( Math.random( ) * 5) + 1


let numeroSommato = numeroUtente + computerNumero
console.log(numeroSommato)


    let pariodispari ;


    if(numeroSommato % 2 === 1){
        pariodispari = "dispari"
    }else {
        pariodispari = "pari"
    }

    if( pariodispari === parOdis){
        alert('hai vinto')

    }else{
        alert('hai perso')
    }

