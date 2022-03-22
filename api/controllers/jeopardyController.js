'use strict';

var mongoose    = require('mongoose'),
    Clue        = mongoose.model('Clues');

// UPDATE to list_all_clues paginated
exports.list_all_clues = function(req, res) {
    Clue.find({}, function(err, clue) {
        if (err) {
            res.send(err);
        }
        res.json(clue);
    });
};

exports.create_a_clue = function(req, res) {
    var new_clue = new Clue(req.body);
    new_clue.save(function(err, clue) {
        if (err) {
            res.send(err);
        }
        res.json(clue);
    });
};

exports.read_a_clue = function(req, res) {
    Clue.findById(req.params.clueId, function(err, clue) {
        if (err) {
            res.send(err);
        }
        res.json(clue);
    });
};

exports.update_a_clue = function(req, res) {
    Clue.findOneAndUpdate({_id: req.params.clueId}, req.body, {new: true}, function(err, clue){
        if(err) {
            res.send(err);
        }
        res.json(clue);
    });
};

exports.delete_a_clue = function(req, res) {
    Clue.remove({
        _id: req.params.clueId
    }, function(err, clue) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Clue successfully deleted'});
    });
};