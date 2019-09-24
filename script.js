const begin_button = document.getElementById('btnEmpezar')

const sky_blue = document.getElementById('celeste')
const violet = document.getElementById('violeta')
const orange = document.getElementById('naranja')
const green = document.getElementById('verde')

class Game {
    constructor(){
        this.initialize()
        this.generateSequence()
        this.nextLevel()
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

    nextLevel(){
        this.lightningSequence()
    }

    transformNumberToColor(number){
        switch(number){
            case 0:
                return 'sky_blue'
            case 1:
                return 'violet'
            case 2:
                return 'orange'
            case 3:
                return 'green'
        }
    }

    lightningSequence(){
        for(var i=0; i < this.level; i++){           
            var color = this.transformNumberToColor(this.sequence[i])
            setTimeout(() => this.lightningColor(color), 1000 * i)
        }
    }

    lightningColor(color){        
        this.colors[color].classList.add('light')
        setTimeout(()=> this.shutdownColor(color), 350)
    }

    shutdownColor(color){
        this.colors[color].classList.remove('light')
    }
}


function beginGame(){    
   window.game = new Game()
}