const mongoose = require("mongoose")


const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }).then(con => {
        console.log(`MongoDB database connected`);
    })
}


module.exports = connectDatabase