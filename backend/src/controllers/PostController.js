const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const Post = require('../models/Post');



module.exports = {
  async index (request, response) {
    const posts = await Post.find();    
    return response.status(200).json(posts)
  },
   async store (request, response) {
    const { author, place, description, hashtags } = request.body;
    const { filename: image } = request.file;

    await sharp(request.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(request.file.destination, 'resized', request.file.filename))
    fs.unlinkSync(request.file.path)
    const post = await Post.create({ author, place, description, hashtags, image });    
    return response.status(201).json(post)
  }
};