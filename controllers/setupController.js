var Todos = require('../models/todoModel');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {
        var starterTodos = [
            {
                username: 'ba',
                todo: 'buy bread',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'ba',
                todo: 'feed cat',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'ba',
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