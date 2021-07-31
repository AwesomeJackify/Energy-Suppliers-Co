import mongoose from 'mongoose'

const schema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: Number,    
})

export default mongoose.model("jive", schema)
