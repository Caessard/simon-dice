const begin_button = document.getElementById('btnEmpezar')

const sky_blue = document.getElementById('celeste')
const violet = document.getElementById('violeta')
const orange = document.getElementById('naranja')
const green = document.getElementById('verde')

class Game {
    constructor(){
        this.initialize()
        this.generateSequence()
    }

    initialize(){
        begin_button.classList.add('hide')
        this.level = 1
        this.colors = {
            sky_blue,
            violet,
            orange,
            green
        }
    }

    generateSequence(){
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
    }
}


function beginGame(){    
   window.game = new Game()
}