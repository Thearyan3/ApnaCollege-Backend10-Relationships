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
    addresses:[
        {
            _id: false,
            location: String,
            city: String
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
    let User1 = new User({
        username: "Sherlockholmes",
        addresses: [
            {
                _id: false,
                location: "221B Baker Street",
                city: "London"
            },
        ],
    });
    User1.addresses.push({
        location:"P32 WallStreet",
        city: "London"
    });
    let result = await User1.save();
    console.log(result);
}

addUsers();