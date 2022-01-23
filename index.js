
let hide = false // a barra inicia aparente
let intervalId
let barralat = document.querySelector(".menu-lateral")
let left = 0

function show_hide(){
    // barralat.style.position = "relative";

    if(hide == false){//se a barra estiver aparente...
        hide = true //esconde a barra

        // aqui chama a função que tornará a barra oculta
        barra(hide)

    }else{// se a barra estiver oculta...
        hide = false // torna a barra aparente

        // aqui chama a função que tornará a barra aparente
        barra(hide)

    }
}


function barra(h){
    if(h == true){// se a barra estiver oculta
        intervalId = setInterval(decrementa, 2)
    }
    
    if(h == false){// se a barra estiver aparente
        intervalId = setInterval(incrementa, 1)
    }

}

// barralat.style.left = `${100}px`;



function incrementa(){
    left += 2
    document.querySelector(".menu-lateral").style.left = `${left}px`;
    para(hide,left)
    // console.log('incrementando')
}

function decrementa(){
    left -= 2
    document.querySelector(".menu-lateral").style.left = `${left}px`;
    para(hide,left)
    // console.log('decrementando')
}

function para(h,v){
    if(v >= 0 && h == false){
        // console.log('Parei de incrementar')
        clearInterval(intervalId)
        // h = true
    }
    if(v <= -282 && h == true){
        // console.log('Parei de decrementar')
        clearInterval(intervalId)
        // h = false
    }
}