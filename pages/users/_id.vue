<template>
  <div class="user">
    <!-- <h3>{{ name }}</h3>
    <h4>@{{ username }}</h4>
    <p>Email : {{ email }}</p>
    <p><nuxt-link to="/">List of users</nuxt-link></p> -->
    <a @click="getPerson()">click</a>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      title: 's'
    }
  },
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  computed: {
    ...mapGetters([
      'people'
    ])
  },
  props: ['person'],
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  methods: {
    getPerson () {
      console.log('people', this.people)
      console.log('person', this.people[0].name)
    },
    ...mapActions([
      'loadPeopleList'
    ])

  },
  async asyncData ({ params, error }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  },
  mounted () {
    this.loadPeopleList()
    this.title = this.people[0].name
    // this.title = 's2'
  }

}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
