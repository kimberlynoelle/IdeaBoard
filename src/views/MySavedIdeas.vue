<template>
<div>
  <div v-if="user">
    <br>
    <my-gallery :myPhotos="myPhotos" />
  </div>
  <div v-else>
    <p>If you would like to upload/save ideas, please sign up for an account or login.</p>
  </div>
</div>
</template>

<script>
import MyGallery from '@/components/MyGallery.vue'

export default {
  name: 'mysavedideas',
  components: {
    MyGallery,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    myPhotos() {
      return this.$store.state.myPhotos;
    }
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getMyPhotos");
  },
}
</script>

<style scoped>
.header {
  display: flex;
}

.header a {
  padding-left: 50px;
  color: #222;
  font-size: 2em;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.header svg {
  margin-top: 12px;
}
</style>
