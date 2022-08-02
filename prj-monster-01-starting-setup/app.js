const randomNumber = (min,max) =>{
  const random = Math.floor(Math.random() * (max-min))+min;
  return random;
}

const app = Vue.createApp({
  data() {
    return {
      mosterHelth : 100,
      playerHelth : 100,
      round : 0,
      winner : null,
      playerScore : 0,
      mosterScore : 0,
      drawScore  :0
    }
  },
  methods: {

    newGame(){
      this.mosterHelth = 100,
      this.playerHelth = 100,
      this.round = 0,
      this.winner = null
    },

    playerAttack(){
      this.playerHelth -= randomNumber(5,10);
      this.mosterAttack();
      this.round++
    },
    mosterAttack(){
      this.mosterHelth -= randomNumber(5,10); 
    },

    specialAttack(){
      this.round = 0;
      this.mosterHelth -= randomNumber(15,20);
      this.mosterAttack()
    },
    heal(){
      this.round = 0;
      this.mosterAttack();

      if (this.playerHelth += randomNumber(10,15) > 100) {
        this.playerAttack = 100;
      }
      else{
        this.playerHelth += randomNumber(10,15);
        this.mosterAttack()
      }
    },
    surrender(){
      this.playerHelth = 0
    }
  },
  computed : {
    playerHelthStyle(){
      return {width: this.playerHelth +'%'}
    },
    mosterHelthStyle(){
      return {width: this.mosterHelth +'%'}
    }
  },
  watch : {
    playerHelth(newData,oldData){
      if(newData < 0){
        this.winner = "Monster"
        this.mosterScore +=1
      }else if(newData == 0 && this.mosterHelth == newData){
        this.winner = "Draw"
        this.drawScore += 1
      }
    },
    mosterHelth(newData,oldData){
      if(newData < 0){
        this.winner = "Player"
        this.playerScore += 1
      } else if(newData == 0 && this.playerHelth == newData){
        this.winner = "Draw"
        this.drawScore += 1
      }
    }
  }
})

app.mount("#game")