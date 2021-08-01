import mongoose from 'mongoose'

const schema_progress = mongoose.Schema({
    progress: Number,
})

export default mongoose.model("progressbar", schema_progress)