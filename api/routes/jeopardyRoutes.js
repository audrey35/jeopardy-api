'use strict';
module.exports = function(app) {
    // controller is required for each route method to call it's respective handler function
    var jeopardy = require('../controllers/jeopardyController');
    var page = require('../controllers/pageController')

    // documentation
    app.route('/')
        .get(page.documentation);

    // jeopardy Routes
    app.route('/clues')
        .get(jeopardy.list_all_clues)
        .post(jeopardy.create_a_clue);

    app.route('/clues/:clueId')
        .get(jeopardy.read_a_clue)
        .put(jeopardy.update_a_clue)
        .delete(jeopardy.delete_a_clue);
};