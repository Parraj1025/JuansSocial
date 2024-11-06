const mongoose = require( 'mongoose' );
require('dotenv').config()


const connectDb = async() => {
    try{
      

        const database = process.env.MONGOURI;

        const connection = await mongoose.connect(database);

        if(connection){
            console.log('Connected to server');
        }
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb