import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    photos: [],
    myPhotos: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPhotos(state, photos) {
      state.photos = photos;
    },
    setMyPhotos(state, myPhotos) {
      state.myPhotos = myPhotos;
    },
  },
  actions: {
    async register(context, data) {
      try {
        let response = await axios.post("/api/users", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async login(context, data) {
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async logout(context) {
      try {
        await axios.delete("/api/users");
        context.commit('setUser', null);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getUser(context) {
      try {
        let response = await axios.get("/api/users");
        context.commit('setUser', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async upload(context, data) {
      try {
        await axios.post('/api/photos', data);
        return "";
      } catch (error) {
        return error.response.data.message;
      }
    },
    async getPhotos(context) {
      try {
        let response = await axios.get("/api/photos/all");
        context.commit('setPhotos', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
    async saveMyPhoto(context, id) {
      try {
        await axios.post('/api/myphotos/'+id);
        return "";
      } catch (error) {
        return error;
      }
    },
    async getMyPhotos(context) {
      try {
        let response = await axios.get("/api/myphotos");
        context.commit('setMyPhotos', response.data);
        return "";
      } catch (error) {
        return "";
      }
    },
  }
});
