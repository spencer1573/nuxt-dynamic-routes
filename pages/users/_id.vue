<template>
  <div class="user">
    <h3>{{ data.name }}</h3>
    <h4>@{{ data.username }}</h4>
    <p>Email : {{ data.email }}</p>
    <p><nuxt-link to="/">List of users</nuxt-link></p>
    <br>
    <p>Rendered from <b>{{ status }}</b></p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head () {
    return {
      title: this.data.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  async asyncData ({ params, error, isStatic, isServer }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      return {
        data,
        status: isStatic ? 'static' : (isServer ? 'server' : 'client')
      }
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
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