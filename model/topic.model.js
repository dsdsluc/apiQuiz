const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({ 
    name: String
}, { timestamps: true });

const Topic = mongoose.model('Topic', topicSchema,"topics");
module.exports = Topic