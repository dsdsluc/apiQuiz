const mongoose = require('mongoose');

module.exports.connect = async ()=>{
    console.log(process.env.MONGO_URL);
    try {
        const mongooseUrl = process.env.MONGO_URL
        await mongoose.connect(mongooseUrl);
        console.log("Connect Success!")
    } catch (error) {
        console.log("Connect Error!")
    }
}