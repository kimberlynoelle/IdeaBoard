const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const auth = require("./auth.js");
const users = require("./users.js");
const User = users.model;
const photos = require("./photos.js");
const Photo = photos.model;

const myPhotoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  path: String,
  description: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const MyPhoto = mongoose.model('MyPhoto', myPhotoSchema);

// upload photo
router.post("/:_id", auth.verifyToken, User.verify, async (req, res) => {
  try {
    console.log("got here");
    let currentPhoto = await Photo.findOne({
      "_id": req.params._id
    });
    console.log("now here");
    const myPhoto = new MyPhoto({
      user: req.user,
      path: currentPhoto.path,
      description: currentPhoto.description,
    });
    try {
      await myPhoto.save();
      return res.sendStatus(200);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  } catch (error) {
    console.log("messed up here");
    console.log(error);
    return res.sendStatus(500);
  }
});

// get my photos
router.get("/", auth.verifyToken, User.verify, async (req, res) => {
  // return photos
  try {
    let myphotos = await MyPhoto.find({
      user: req.user
    }).sort({
      created: -1
    });
    return res.send(myphotos);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

module.exports = {
  model: MyPhoto,
  routes: router,
}
