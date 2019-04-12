var Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res){
        
        // seed data
        var starterTodos = [
            {
                username:'test',
                todo: 'buy bread',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'test',
                todo: 'feed cat',
                isDone: false,
                hasAttachment: false
            },
            {
                username:'test',
                todo: 'learn to code',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results){
            res.send(results);
        });
    });
}