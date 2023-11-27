const { Schema, model, models } = require('mongoose');

const listSchema = new Schema({
    brewery: {
        type: String,
        required: true
    },
    is_completed: {
        type: Boolean,
        default: false
    }

})

module.exports = models.List || model('List', listSchema)