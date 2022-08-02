const app = Vue.createApp({
  data() {
    return {
      text : "Hello my name is Valisher",
      inputVal : "",
    }
  },
  methods: {
    showAlertText(){
      alert(this.text)
    },
    getInputVal(val){
      this.inputVal = val.target.value
    },
    getKeyInput(val){
      console.log(val.target.value);
    }
  },
})

app.mount("#assignment")