<template>
  <!--<form class="mx-52 px-40 my-40" @submit="createPost" method="post">
    <label>userName :</label>
    <q-input
      class="pb-10"
      type="text"
      name="userName"
      v-model="posts.userName"
    ></q-input>
    <label>password :</label>
    <q-input type="password" name="text" v-model="posts.password"></q-input>

    <q-btn class="my-10" type="submit">Submit</q-btn>
  </form>-->
  <div>
    {{ posts.userName }}
    {{ posts.password }}
  </div>
</template>

<script>
//import Vue from "vue";

import axios from "axios";
//import VueAxios from "vue-axios";

//Vue.useAttrs(VueAxios, axios);

export default {
  data() {
    return {
      posts: {
        userName: null,
        password: null,
      },
    };
  },
  mounted() {
    axios
      .get("https://fakerestapi.azurewebsites.net/api/v1/Users/2")
      .then((response) => (this.posts = response.data));
  },
};
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
