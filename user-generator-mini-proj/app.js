// Creating the App
const app = Vue.createApp({
  // The HTML template you'd like to output
  template: '',

  // Data is always a function which returns an Object
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@gmail.com',
      gender: 'female',
      picture: 'https://randomuser.me/api/portraits/men/11.jpg',
    }
  },
})

// Mounting the App
app.mount('#App')
