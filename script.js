const begin_button = document.getElementById('btnEmpezar')

const sky_blue = document.getElementById('celeste')
const violet = document.getElementById('violeta')
const orange = document.getElementById('naranja')
const green = document.getElementById('verde')

class Game {
    constructor(){
        this.initialize()
    }

    initialize(){
        begin_button.classList.add('hide')
    }
}


function beginGame(){    
   var game = new Game()
}