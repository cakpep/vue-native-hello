<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="gotoHome">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Comments</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-spinner color="blue" v-if="loading" />
      <nb-card v-if="!loading">
        <nb-card-item bordered>
          <nb-left>
            <nb-thumbnail :source="logo"></nb-thumbnail>
            <nb-body>
              <nb-text>{{ post.title }}</nb-text>
              <nb-text note>April 20, 2018</nb-text>
            </nb-body>
          </nb-left>
        </nb-card-item>
        <nb-card-item>
          <nb-body>
            <image
              :source="cardImage"
              class="card-item-image"
              :style="stylesObj.cardItemImage"
            />
            <nb-text>{{ post.body }}</nb-text>
          </nb-body>
        </nb-card-item>
        <nb-card-item>
          <nb-left>
            <nb-button transparent>
              <nb-icon name="thumbs-up" active></nb-icon>
              <nb-text>13 Likes</nb-text>
            </nb-button>
          </nb-left>
          <nb-right>
            <nb-button
              transparent
              :onPress="() => (showComment = !showComment)"
            >
              <nb-icon name="chatbubbles" active></nb-icon>
              <nb-text>{{ numberOfCommentsText }}</nb-text>
            </nb-button>
          </nb-right>
        </nb-card-item>
      </nb-card>
      <nb-list v-if="showComment">
        <comment-item
          v-for="comment in comments"
          :key="comment.id"
          :data="comment"
        />
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import { Dimensions } from "react-native";
import logo from "../../../../assets/logo.png";
import cardImage from "../../../../assets/drawer-cover.png";

import * as TypicodeApi from "../services";
import CommentItem from "../components/CommentItem";

const deviceWidth = Dimensions.get("window").width;

export default {
  props: {
    navigation: Object
  },
  computed: {
    numberOfCommentsText() {
      const num = this.comments.length;
      return num > 1 ? `${num} Comments` : `${num} Comment`;
    }
  },
  data() {
    return {
      logo,
      cardImage,
      stylesObj: {
        cardItemImage: {
          resizeMode: "cover",
          width: deviceWidth / 1.18
        }
      },
      loading: true,
      commentSectionLoading: false,
      showComment: false,
      post: {},
      comments: []
    };
  },
  created() {
    this.fetchPost();
    this.fetchComments();
  },
  methods: {
    gotoHome() {
      this.navigation.goBack();
    },
    fetchPost() {
      TypicodeApi.fetch("posts/1")
        .then(response => {
          this.post = response;
        })
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    },
    fetchComments() {
      TypicodeApi.fetch("comments?postId=1")
        .then(response => {
          this.comments = response;
        })
        .catch(error => console.log(error));
    }
  },
  components: {
    CommentItem
  }
};
</script>

<style>
.card-item-image {
  flex: 1;
  height: 200;
}
</style>
