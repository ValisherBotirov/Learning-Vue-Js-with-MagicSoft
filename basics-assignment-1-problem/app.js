const app = Vue.createApp({
  data() {
    return {
      name : "Valisher",
      age : 20,

    }
  },
methods: {
  addAge(){
    return this.age + 5
  },
  randomNumber(){
    return Math.random()
  }
},
})

app.mount("#assignment")