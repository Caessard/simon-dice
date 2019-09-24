const begin_button = document.getElementById('btnEmpezar')

const sky_blue = document.getElementById('celeste')
const violet = document.getElementById('violeta')
const orange = document.getElementById('naranja')
const green = document.getElementById('verde')

const LAST_LEVEL = 10

class Game {
    constructor(){
        this.initialize()
        this.generateSequence()
        this.nextLevel()
    }

    initialize(){
        this.selectColor = this.selectColor.bind(this)
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

    selectColor(ev){        
        const nameColor = ev.target.dataset.engcolor
        const numberColor = transformColorToNumber(nameColor);
        this.lightningColor(nameColor)
        
        if(numberColor === this.sequence[this.sublevel]){
            this.sublevel++
            if(this.sublevel === this.level){
                this.level++
                //this.deleteClickEvents()
                if(this.level === (LAST_LEVEL + 1)){
                    //WIN
                } else {
                    this.nextLevel()
                }
            }            
        } else {
            //LOSE
        }
    }
}


function beginGame(){    
   window.game = new Game()
}