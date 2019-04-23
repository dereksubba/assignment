const Assignment = require('../models/assignment.model.js');

// Create and Save a new employee
exports.create = (req, res) => {
    // Validate request
    if(!req.body.secondName) {
        return res.status(400).send({
            message: "Employee content can not be empty"
        });
    }

    // Create a employee
    const assignment = new Assignment({
        firstName: req.body.firstName || "Untitled Employee", 
        secondName: req.body.secondName
    });

    // Save employee in the database
    assignment.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Employee."
        });
    });
};

// Retrieve and return all employee from the database.
exports.findAll = (req, res) => {
    Assignment.find()
    .then(assignment => {
        res.send(assignment);
        console.log(assignment);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving employee."
        });
    });
};


// Update a employee identified by the employeeId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.secondName) {
        return res.status(400).send({
            message: "Employee content can not be empty"
        });
    }

    // Find employee and update it with the request body
    Assignment.findByIdAndUpdate(req.params.assignmentId, {
        firstName: req.body.firstName || "Untitled Employee",
        secondName: req.body.secondName
    }, {new: true})
    .then(assignment => {
        if(!assignment) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.assignmentId
            });
        }
        res.send(assignment);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.assignmentId
            });                
        }
        return res.status(500).send({
            message: "Error updating employee with id " + req.params.assignmentId
        });
    });
};

// Delete a employee with the specified employeeId in the request
exports.delete = (req, res) => {
    Assignment.findByIdAndRemove(req.params.assignmentId)
    .then(assignment => {
        if(!assignment) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.assignmentId
            });
        }
        res.send({message: "Employee deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.assignmentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete employee with id " + req.params.assignmentId
        });
    });
};
