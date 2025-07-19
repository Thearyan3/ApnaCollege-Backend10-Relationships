const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
.then(() => console.log("Connection Successful"))
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username: String,
    email: String     
});

const postSchema = new Schema({
    content: String,
    likes: Number,
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }  
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async() => {
//     let user = await User.findOne({username: "Rahul Kumar"});

//     let post2 = new Post({
//         content: "Bye Bye",
//         likes: 15,
//     });

//     post2.user = user;

//     await post2.save();
// }

// addData();

const getData = async() => {
    let result = await Post.findOne({}).populate("user","username");
    console.log(result);
}
// getData();

const del = async() => {
    let del1 = await User.findByIdAndDelete('687a8250dcca413e54c94fd5');
    console.log(del1);
}
del();

