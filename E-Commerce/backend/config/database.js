const mongoose = require("mongoose");

const connectDatabase = () =>{
    // db connection
    mongoose.connect(process.env.DB_URL, { 
        useNewUrlParser:true,
        useUnifiedTopology:true,
        // useCreateIndex:true
    }).then( (data) =>{
        console.log(`Mongodb connected with sertver : ${data.connection.host}`); //we will know the host of the server
    }).catch( (error) =>{
        console.log(error);
    })
}

module.exports = connectDatabase
