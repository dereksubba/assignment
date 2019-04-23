const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({
    firstName: String,
    secondName: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
