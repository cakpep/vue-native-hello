<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button transparent :onPress="gotoHome">
          <nb-icon name="arrow-back" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Albums</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-spinner v-if="loading"></nb-spinner>
      <nb-list v-if="!loading">
        <nb-list-item thumbnail v-for="album in albums" :key="album.id">
          <nb-left>
            <nb-thumbnail square :source="album.thumbnailUrl" />
          </nb-left>
          <nb-body>
            <nb-text>{{ album.title }}</nb-text>
          </nb-body>
        </nb-list-item>
      </nb-list>
    </nb-content>
  </nb-container>
</template>

<script>
import * as TypicodeApi from "../services";

export default {
  props: {
    navigation: Object
  },
  data() {
    return {
      loading: true,
      albums: []
    };
  },
  created() {
    this.fetchAlbums();
  },
  methods: {
    gotoHome() {
      this.navigation.goBack();
    },
    fetchAlbums() {
      TypicodeApi.fetch("photos?albumId=1")
        .then(response => {
          this.albums = response;
        })
        .catch(error => console.log(error))
        .finally(() => (this.loading = false));
    }
  }
};
</script>
