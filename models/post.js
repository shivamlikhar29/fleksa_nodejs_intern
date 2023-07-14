const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title:String,

    message:String,

    selectedFile:String,
    
    createdAt:{
        type:Date,
        default:new Date()
    },
})

const PostMessage = mongoose.model('fleksa_internship',PostSchema)

module.exports = PostMessage