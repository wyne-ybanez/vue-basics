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
  /* 
   We can write our methods underneath our data object
   We can access our data in this, using the 'this' keyword
  */
  methods: {
    async getRandomUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      console.log(results)

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    },
  },
})

// Mounting the App
app.mount('#App')
