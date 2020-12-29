<template>
  <div class="columns is-multiline">
    <div class="column is-3 has-text-centered" v-for="user in users" :key="user.id">
      <div class="card has-background-white">
        <div class="card-image">
          <img :src="'https://i.pravatar.cc/300?img=' + user.id " :alt="user.name" />
        </div>
        <div class="card-content">
          <h2>{{user.name}}</h2>

          <router-link
            :to="{name:'User', params: {id:user.id}}"
            class="button is-warning mt-2"
          >view profile</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",

  data() {
    return {
      users: [],
    };
  },

  async created() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.users = result.data;
  },
};
</script>