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
import HomeScreen from "./screens/home/index.vue";
import SideBarScreen from "./screens/sidebar/index.vue";

import HeaderScreen from "./screens/header";
import Header1Screen from "./screens/header/header1";
import Header2Screen from "./screens/header/header2";
import Header3Screen from "./screens/header/header3";
import Header4Screen from "./screens/header/header4";
import Header5Screen from "./screens/header/header5";
import Header6Screen from "./screens/header/header6";
import Header7Screen from "./screens/header/header7";
import Header8Screen from "./screens/header/header8";
import HeaderNoShadowScreen from "./screens/header/headerNoShadow";
import HeaderSpanScreen from "./screens/header/headerSpan";

import FooterScreen from "./screens/footer";
import BadgeFooterScreen from "./screens/footer/badgeFooter";
import BasicFooterScreen from "./screens/footer/basicFooter";
import IconFooterScreen from "./screens/footer/iconFooter";
import IconTextFooterScreen from "./screens/footer/iconTextFooter";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Header: { screen: HeaderScreen },
    Footer: { screen: FooterScreen }
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
      Header1: { screen: Header1Screen },
      Header2: { screen: Header2Screen },
      Header3: { screen: Header3Screen },
      Header4: { screen: Header4Screen },
      Header5: { screen: Header5Screen },
      Header6: { screen: Header6Screen },
      Header7: { screen: Header7Screen },
      Header8: { screen: Header8Screen },
      HeaderNoShadow: { screen: HeaderNoShadowScreen },
      HeaderSpan: { screen: HeaderSpanScreen },

      BadgeFooter: { screen: BadgeFooterScreen },
      BasicFooter: { screen: BasicFooterScreen },
      IconFooter: { screen: IconFooterScreen },
      IconText: { screen: IconTextFooterScreen }
    },
    {
      initialRouteName: "Drawer",
      headerMode: "none"
    }
  )
);
export default {
  components: { Root, AppNavigation }
};
</script>
