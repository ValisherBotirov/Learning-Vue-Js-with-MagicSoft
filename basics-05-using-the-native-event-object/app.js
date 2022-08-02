const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname : ""
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  },
  watch : {
    name(newDate,oldDate){
      this.fullname = newDate + "Botirov"
    }
  }
});

app.mount('#events');
