// MINHA SOLUÇÃO PARA OCULTAR/MOSTRAR A BARRA LATERAL
/*
let hide = true // a barra inicia aparente
let intervalId
let barralat = document.querySelector(".menu-lateral")
let left = -282

function show_hide(){
    barralat.style.position = "relative";
    document.querySelector(".cabecalho__menu").setAttribute("onclick", "")

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
        intervalId = setInterval(decrementa, 0.25)
    }
    
    if(h == false){// se a barra estiver aparente
        intervalId = setInterval(incrementa, 0.25)
    }

}

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
        document.querySelector(".cabecalho__menu").setAttribute("onclick", "show_hide()")
        clearInterval(intervalId)
        // h = true
    }
    if(v <= -282 && h == true){
        // console.log('Parei de decrementar')
        document.querySelector(".cabecalho__menu").setAttribute("onclick", "show_hide()")
        clearInterval(intervalId)
        // h = false
    }
}
*/

// SOLUÇÃO DO INSTRUTOR
const botaoMenu = document.querySelector('.cabecalho__menu')
const menuLateral = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('menu-lateral--ativo')
})