<template>
  <div class="user">
    <h3>{{ name }}</h3>
    <h4>@{{ username }}</h4>
    <p>Email : {{ email }}</p>
    <p><nuxt-link to="/">List of users</nuxt-link></p>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  computed: {
    ...mapGetters([
      'people'
    ])
  },
  head () {
    return {
      title: this.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  async asyncData ({ params, error }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  },
  methods: {
    ...mapActions([
      'loadPeopleList'
    ])

  },
  mounted () {
    this.loadPeopleList()
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
