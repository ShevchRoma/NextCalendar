import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    start: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

export default mongoose.models.Post || mongoose.model("Post", postSchema)