<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="gotoHome">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Typicode</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-card v-for="nav in navs" :key="nav.title">
        <nb-card-item button :onPress="() => goToScreen(nav.screen)">
          <nb-left>
            <nb-icon :name="nav.icon"></nb-icon>
            <nb-text>{{ nav.title }}</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>

<script>
export default {
  props: {
    navigation: Object
  },
  data() {
    return {
      loading: true,
      navs: [
        {
          title: "Posts",
          icon: "chatbubbles",
          screen: "TypicodePostsScreen"
        },
        {
          title: "Albums",
          icon: "images",
          screen: "TypicodeAlbumsScreen"
        },
        {
          title: "Todos",
          icon: "grid",
          screen: "TypicodePostsScreen"
        },
        {
          title: "Users",
          icon: "person",
          screen: "TypicodePostsScreen"
        }
      ]
    };
  },
  methods: {
    gotoHome() {
      this.navigation.goBack();
    },
    goToScreen(screenName) {
      this.navigation.navigate(screenName);
    }
  }
};
</script>
