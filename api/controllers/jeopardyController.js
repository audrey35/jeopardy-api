// - Error: Route.get() requires a callback function but got a [object Undefined]
//    - https://stackoverflow.com/a/60235531

'use strict';

var mongoose    = require('mongoose'),
    Clue        = mongoose.model('Clues');

exports.list_all_clues = function(req, res) {
    Clue.paginate({}, {page: req.query.pageNumber, limit: 10}, function(err, clue) {
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

exports.list_all_clues_in_a_category = function(req, res) {
    Clue.find({category: req.params.category}, function(err, clue) {
      if (err)
        res.send(err);
      res.json(clue);
    });
  };

exports.list_all_categories = function(req, res) {
    Clue.find().distinct('category', function(err, clue) {
        if (err) {
            res.send(err);
        }
        res.json(clue);
    });
};

exports.list_all_clues_for_a_value = function(req, res) {
    Clue.find({value: req.params.value}, function(err, clue) {
      if (err)
        res.send(err);
      res.json(clue);
    });
  };

exports.list_all_values = function(req, res) {
    Clue.find().distinct('value', function(err, clue) {
        if (err) {
            res.send(err);
        }
        res.json(clue);
    });
};