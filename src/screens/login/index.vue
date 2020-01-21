<template>
  <nb-container v-if="loaded" class="container">
    <nb-content padder>
      <image :source="drawerImage" :style="stylesObj.drawerImageStyle" />
      <nb-form>
        <nb-item
          :error="
            (!$v.emailValue.required || !$v.emailValue.email) &&
              $v.emailValue.$dirty
          "
        >
          <nb-input
            placeholder="Email"
            v-model="emailValue"
            auto-capitalize="none"
            :on-blur="() => $v.emailValue.$touch()"
          />
        </nb-item>
        <nb-item last :error="!$v.password.required && $v.password.$dirty">
          <nb-input
            placeholder="Password"
            v-model="password"
            auto-capitalize="none"
            secure-text-entry
            :on-blur="() => $v.password.$touch()"
          />
        </nb-item>
      </nb-form>
      <view :style="{ marginTop: 10 }">
        <nb-button block :on-press="login">
          <nb-spinner v-if="logging_in" size="small" />
          <nb-text>Login </nb-text>
        </nb-button>
      </view>
    </nb-content>
  </nb-container>
  <nb-spinner v-else></nb-spinner>
</template>

<script>
import { AsyncStorage, Dimensions, Platform } from "react-native";
import { Toast } from "native-base";
import { required, email } from "vuelidate/lib/validators";
import store from "../../store";

import drawerCover from "../../../assets/drawer-cover.png";
import drawerImage from "../../../assets/logo-kitchen-sink.png";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  props: {
    navigation: {
      type: Object
    }
  },
  computed: {
    logging_in() {
      return store.state.logging_in;
    }
  },
  validations: {
    emailValue: {
      required,
      email
    },
    password: {
      required
    }
  },
  data() {
    return {
      drawerCover,
      drawerImage,
      emailValue: "",
      password: "",
      loaded: false,
      stylesObj: {
        drawerImageStyle: {
          alignSelf: "center",
          left: Platform.OS === "android" ? deviceWidth / 3 : deviceWidth / 9,
          top:
            Platform.OS === "android" ? deviceHeight / 12 : deviceHeight / 12,
          resizeMode: "cover",
          height: 150,
          width: 420
        }
      }
    };
  },
  created() {
    AsyncStorage.getItem("email").then(val => {
      if (val) {
        this.loaded = true;
        this.navigation.navigate("Home");
        store.dispatch("SET_USER", { userObj: { email: val } });
      } else {
        this.loaded = true;
      }
    });
  },
  methods: {
    login() {
      if (this.emailValue && this.password && !this.$v.emailValue.$invalid) {
        store.dispatch("LOGIN", {
          userObj: { email: this.emailValue },
          navigate: this.navigation.navigate
        });
      } else {
        Toast.show({
          text: "Invalid Email or Password",
          buttonText: "Okay",
          position: "top"
        });
      }
    }
  }
};
</script>
