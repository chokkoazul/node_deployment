const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortid = require('shortid');

const urlSchema = new Schema({
    urlOriginal: {
        type: String,
        lowercase: true,
        trim: true,
        required: 'Agrega una url'
    },
    urlCorta: {
        type: String
    }
});

urlSchema.pre('save', async function(next){
    this.urlCorta = shortid.generate();
    next();
})

module.exports = mongoose.model('Urls', urlSchema);