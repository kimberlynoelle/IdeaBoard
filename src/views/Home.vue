<template>
<div>
  <div v-if="user">
    <div class="header">
      <div>
        <p>
          <a @click="toggleUpload"><i class="far fa-image"></i></a>
          Upload new idea
        </p>
      </div>
      <p id="instructions">Click an idea to save it to your board</p>
    </div>
    <uploader :show="show" @uploadFinished="uploadFinished" />
  </div>
  <div v-else>
    <p>If you would like to upload/save ideas, please sign up for an account or login.</p>
  </div>
  <image-gallery :photos="photos" />
  <a id="github" href="https://github.com/kimberlynoelle/creative-project-five">GitHub</a>
</div>

</template>

<script>
import ImageGallery from '@/components/ImageGallery.vue'
import Uploader from '@/components/Uploader.vue'

export default {
  name: 'home',
  components: {
    Uploader,
    ImageGallery
  },
  data() {
    return {
      show: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    photos() {
      return this.$store.state.photos;
    }
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getPhotos");
  },
  methods: {
    toggleUpload() {
      this.show = true;
    },
    async uploadFinished() {
      this.show = false;
      try {
        this.error = await this.$store.dispatch("getPhotos");
      } catch (error) {
        console.log(error);
      }
    },
  }
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

#instructions {
  text-align: right;
  width: 100%;
  margin-right: 20px;
}

#github {
  text-align: right;
  width: 100%;
  margin-right: 20px;
}

.header svg {
  margin-top: 12px;
}
</style>
