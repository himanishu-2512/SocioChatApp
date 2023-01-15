const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
    content: {
        type: "string",
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    likes: [{
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    }

    ],
    comments: [
        {
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            date: {
                type: Date,
                default: Date.now(),
            },
            content: {
                type: string,
                required: [true, "write comment"]
            },
        },
    ],

})

const Post = new mongoose.Model("Post", postSchema)
exports.module = Post;
