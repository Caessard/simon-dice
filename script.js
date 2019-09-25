const begin_button = document.getElementById('btnEmpezar')

const sky_blue = document.getElementById('celeste')
const violet = document.getElementById('violeta')
const orange = document.getElementById('naranja')
const green = document.getElementById('verde')

const LAST_LEVEL = 10

class Game {
    constructor(){        
        this.initialize = this.initialize.bind(this)        
        this.initialize()
        this.generateSequence()
        setTimeout(this.nextLevel, 500)
    }

    initialize(){
        this.selectColor = this.selectColor.bind(this)
        this.nextLevel = this.nextLevel.bind(this)
        this.toggleBeginButton()        
        this.level = 1
        this.colors = {
            sky_blue,
            violet,
            orange,
            green
        }
    }

    toggleBeginButton(){
        if(begin_button.classList.contains('hide')){
            begin_button.classList.remove('hide')
        } else {
            begin_button.classList.add('hide')
        }        
    }

    generateSequence(){
        this.sequence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }

    nextLevel(){
        this.sublevel = 0
        this.lightningSequence()
        this.addClickEvent()
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

    transformColorToNumber(color){
        switch(color){
            case 'sky_blue':
                return 0
            case 'violet':
                return 1
            case 'orange':
                return 2
            case 'green':
                return 3
        }
    }

    lightningSequence(){
        for(let i=0; i < this.level; i++){           
            const color = this.transformNumberToColor(this.sequence[i])
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

    addClickEvent() {
        this.colors.sky_blue.addEventListener('click', this.selectColor)
        this.colors.violet.addEventListener('click', this.selectColor)
        this.colors.orange.addEventListener('click', this.selectColor)
        this.colors.green.addEventListener('click', this.selectColor)
    }

    removeClickEvents(){
        this.colors.sky_blue.removeEventListener('click', this.selectColor)
        this.colors.violet.removeEventListener('click', this.selectColor)
        this.colors.orange.removeEventListener('click', this.selectColor)
        this.colors.green.removeEventListener('click', this.selectColor)
    }


    selectColor(ev){        
        const nameColor = ev.target.dataset.engcolor
        const numberColor = this.transformColorToNumber(nameColor);
        this.lightningColor(nameColor)
        
        if(numberColor === this.sequence[this.sublevel]){
            this.sublevel++
            if(this.sublevel === this.level){
                this.level++
                this.removeClickEvents()
                if(this.level === (LAST_LEVEL + 1)){
                    this.winGame()
                } else {
                    setTimeout(this.nextLevel, 1500)
                }
            }            
        } else {
            this.loseGame()
        }
    }

    winGame(){
        swal('Curso de Javascript - Simón Dice','Felicitaciones ganaste el juego!', 'success')
            .then(this.initialize)
    }

    loseGame(){
        swal('Curso de Javascript - Simón Dice','Lo lamentamos, perdiste :(', 'error')
        .then(() => {
            this.removeClickEvents()
            this.initialize()
        })
    }
}


function beginGame(){    
   window.game = new Game()
}