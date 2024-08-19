const mongoose = require('mongoose');

const connect = async function () {

    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/spectraDB`);
        console.log('Databse Connected');
    } catch (error) {
        console.log(error);
    }
}

mongoose.set('strictQuery', true);
connect();