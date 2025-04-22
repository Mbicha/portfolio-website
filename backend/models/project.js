const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String, 
        minlength: 5, 
        required: true,
        unique: true
    },
    description: {
        type: String,
        minlength: 50
    },
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Project', ProjectSchema);
