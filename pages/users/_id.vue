<template>
  <div class="user">
    <p>Hi from {{ name }}</p>
    <h3>{{ name }}</h3>
    <p><nuxt-link to="/">List of users</nuxt-link></p>
  </div>
</template>

<script>

export default {
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
  async asyncData ({ isStatic, isServer, params, error, payload }) {
    console.log(payload)
    if (payload) return { user: payload, name: isStatic ? 'static' : (isServer ? 'server' : 'client') }
    else return { user: payload, name: isStatic ? 'static' : (isServer ? 'server' : 'client') }
  }
/*   asyncData ({ isStatic, isServer }) {
    return {
      name: isStatic ? 'static' : (isServer ? 'server' : 'client')
    }
  } */
}
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
