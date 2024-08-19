const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const leadSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: 'You are already subscribed.',
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
        },
    },
},{timestamps:true});

leadSchema.plugin(uniqueValidator);

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;