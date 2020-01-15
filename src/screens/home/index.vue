<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="openDrawerMenu">
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Home Sweet Home</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-card v-for="item in items" :key="item.screen">
        <nb-card-item button :onPress="() => openScreen(item.screen)">
          <nb-left>
            <nb-icon name="logo-googleplus"></nb-icon>
            <nb-text>{{ item.title }}</nb-text>
          </nb-left>
          <nb-right>
            <nb-icon name="arrow-forward"></nb-icon>
          </nb-right>
        </nb-card-item>
      </nb-card>
    </nb-content>

    <nb-footer>
      <nb-footer-tab>
        <nb-button :active="tab1" :onPress="toggleTab1">
          <nb-icon name="apps" :active="tab1" />
          <nb-text>Apps</nb-text>
        </nb-button>

        <nb-button :active="tab2" :onPress="toggleTab2">
          <nb-icon name="camera" :active="tab2" />
          <nb-text>Camera</nb-text>
        </nb-button>

        <nb-button :active="tab3" :onPress="toggleTab3">
          <nb-icon name="compass" :active="tab3" />
          <nb-text>Compass</nb-text>
        </nb-button>

        <nb-button :active="tab4" :onPress="toggleTab4">
          <nb-icon name="contact" :active="tab4" />
          <nb-text>Contact</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Object
    }
  },
  data() {
    return {
      items: [
        {
          title: "Typicode",
          screen: "TypicodeScreen"
        },
        {
          title: "BitCoin",
          screen: "FooterScreen"
        }
      ],
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false
    };
  },
  methods: {
    openDrawerMenu() {
      this.navigation.openDrawer();
    },
    openScreen(screen) {
      this.navigation.navigate(screen);
    },
    toggleTab1() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab2() {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
    },
    toggleTab3() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
    },
    toggleTab4() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
    }
  }
};
</script>

<style>
.imageContainer {
  flex: 1;
}
.text-color-primary {
  color: blue;
  font-family: Roboto;
}
.logoContainer {
  flex: 1;
  margin-bottom: 30;
}
.logo {
  position: absolute;
  width: 280;
  height: 100;
}
.text-container {
  align-items: center;
  margin-bottom: 50;
  background-color: transparent;
}
.text-color-white {
  color: white;
}
.button-container {
  background-color: #6faf98;
  align-self: center;
}
</style>
