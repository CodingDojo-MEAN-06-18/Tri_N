const mongoose = require('mongoose');

const { Schema } = mongoose;

const authorSchema = new Schema({
  author: {
    type: string,
    required: [true],
    trim: true,
  }
})
