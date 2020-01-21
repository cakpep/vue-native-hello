<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "vue-native-router";
import { Root } from "native-base";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home/index.vue";
import SideBarScreen from "./screens/sidebar/index.vue";

import TypicodeScreen from "./screens/typicode";
import TypicodePostsScreen from "./screens/typicode/screens/Posts";
import TypicodePostsCommentsScreen from "./screens/typicode/screens/PostsComments";

import TypicodeAlbumsScreen from "./screens/typicode/screens/Albums";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: SideBarScreen
  }
);

const AppNavigation = createAppContainer(
  createStackNavigator(
    {
      Drawer: { screen: Drawer },
      Login: { screen: LoginScreen },

      TypicodeScreen: { screen: TypicodeScreen },
      TypicodePostsScreen: { screen: TypicodePostsScreen },
      TypicodePostsCommentsScreen: { screen: TypicodePostsCommentsScreen },

      TypicodeAlbumsScreen: { screen: TypicodeAlbumsScreen }
    },
    {
      initialRouteName: "Login",
      headerMode: "none"
    }
  )
);
export default {
  components: { Root, AppNavigation }
};
</script>
