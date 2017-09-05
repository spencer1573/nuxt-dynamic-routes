<template>
  <div class="container">
    <h2>Users</h2>
    <ul class="users">
      <li v-for="person in people">
        <p style="padding: 10px;">{{person.name}}</p>
        <!-- <nuxt-link :to="'/users/'+todo">{{ todo }}</nuxt-link> -->
      </li>
    </ul>
    <a @click="getProject()">click</a>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'people'
    ])
  },
  methods: {
    getProject () {
      console.log('people', this.people)
    },
    ...mapActions([
      'loadPeopleList'
    ])
  },
  mounted () {
    this.loadPeopleList()
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}
.container {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
.users {
  list-style-type: none;
}
.users li p {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: center;
  color: #222;
  text-decoration: none;
}
.users li a:hover {
  color: orange;
}
</style>
