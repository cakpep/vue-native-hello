<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="gotoHome">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Posts</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-spinner v-if="loading"></nb-spinner>
      <nb-list v-if="!loading">
        <nb-list-item
          button
          avatar
          v-for="post in posts"
          :key="post.id"
          :onPress="() => goToScreen()"
        >
          <nb-left>
            <nb-thumbnail small :source="logo" />
          </nb-left>
          <nb-body>
            <nb-text>{{ post.title }}</nb-text>
          </nb-body>
          <nb-right>
            <nb-icon name="arrow-forward" />
          </nb-right>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import * as TypicodeApi from "../services";
import logo from "../../../../assets/logo.png";

export default {
  props: {
    navigation: Object
  },
  data() {
    return {
      logo,
      loading: true,
      posts: []
    };
  },
  created() {
    this.fetchTodosList();
  },
  methods: {
    gotoHome() {
      this.navigation.goBack();
    },
    goToScreen() {
      this.navigation.navigate("TypicodePostsCommentsScreen");
    },
    fetchTodosList() {
      TypicodeApi.fetch("posts")
        .then(response => {
          this.posts = response;
        })
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    }
  }
};
</script>
