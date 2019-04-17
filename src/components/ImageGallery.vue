<template>
<div>
  <div class="image" v-for="photo in photos" v-bind:key="photo._id">
    <img :src="photo.path" />
    <p>{{photo.description}}</p>
  </div>
</div>
</template>

<script>

export default {
  name: 'ImageGallery',
  props: {
    photos: Array
  },
}
</script>

<style scoped>

.photoDate {
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
}

p {
  margin: 0px;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  max-width: 600px;
  max-height: 600px;
  image-orientation: from-image;
}
</style>
