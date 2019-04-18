<template>
<div>
  <div class="masonry">
    <div class="image" v-for="myPhoto in myPhotos" v-bind:key="myPhoto._id">
      <article>
        <img :src="myPhoto.path">
        <p>{{myPhoto.description}}</p>
      </article>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MyGallery',
  props: {
    myPhotos: Array,
  },
}
</script>

<style scoped>
p {
  margin: 0px;
}

.image {
  margin: 0 0 1em;
}

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 80%;
  background: #ccc;
  line-height: 1.2;
  margin: 4em;
}

article {
  padding: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  background: #fff;
}

a:link,
a:visited {
  color: black;
}

h1 {
  margin-top: 0;
  margin-left: 0.75rem;
}

main {
  columns: 250px;
  column-gap: 20px;
}

article {
  break-inside: avoid-column;
  margin-bottom: 1rem;
}

.masonry {
  /* Masonry container */
  column-count: 5;
  column-gap: 1em;
}

.image img {
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  image-orientation: from-image;
}
</style>
