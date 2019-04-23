module.exports = (app) => {
    const assignments = require('../controllers/assignment.controller.js');

    // Create a new Employee
    app.post('/assignments', assignments.create);

    // Retrieve all Employee
    app.get('/assignments', assignments.findAll);

    // Update a employee with id
    app.put('/assignments/:assignmentId', assignments.update);

    // Delete a employee with id
    app.delete('/assignments/:assignmentId', assignments.delete);
}

