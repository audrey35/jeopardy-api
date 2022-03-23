'use strict';
module.exports = function(app) {
    // controller is required for each route method to call it's respective handler function
    var jeopardy = require('../controllers/jeopardyController');

    // jeopardy Routes
    app.route('/clues')
        .get(jeopardy.list_all_clues)
        .post(jeopardy.create_a_clue);

    app.route('/clues/:clueId')
        .get(jeopardy.read_a_clue)
        .put(jeopardy.update_a_clue)
        .delete(jeopardy.delete_a_clue);
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Clue:
 *       type: object
 *       required:
 *         - category
 *         - value
 *         - question
 *         - answer
 *       properties:
 *         id:
 *           type: string
 *           example: 61705dffb35ad7cfe1c5caff
 *         category:
 *           type: string
 *           example: HISTORY
 *         value:
 *           type: string
 *           example: $200
 *         question:
 *           type: string
 *           example: For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory
 *         answer:
 *           type: string
 *           example: Copernicus
 *         round:
 *           type: string
 *           example: Jeopardy!
 *         show_number:
 *           type: string
 *           example: 4680
 *         air_date:
 *           type: string
 *           example: 2004-12-31
 */

/**
 * @swagger
 * /clues:
 *   get:
 *     summary: Returns 10 clues from the selected page. Returns one page of results only.
 *     parameters:
 *       - in: query
 *         name: pageNumber
 *         schema:
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: The list of clues
 *         content:
 *           application/json:
 *             schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Clue'
 * 
 *   post:
 *     summary: Create a new clue. Delete the id from the request body and let MongoDB generate the id for you.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Clue'
 *     responses:
 *       200:
 *         description: The clue was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clue'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /clues/{clueId}:
 *   get:
 *     summary: Get the clue by id
 *     parameters:
 *       - in: path
 *         name: clueId
 *         schema:
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: The jeopardy clue by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clue'
 *       404:
 *         description: The clue was not found
 * 
 *   put:
 *     summary: Put/update a clue by id. Delete the id from the request body. Only keep the key pairs for the ones being updated.
 *     parameters:
 *       - in: path
 *         name: clueId
 *         schema:
 *         type: string
 *         required: true
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clue'
 *     responses:
 *       200:
 *         description: Put/updated a clue by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Clue'
 *       404:
 *         description: The clue was not found
 *
 *   delete:
 *     summary: Delete a clue by id
 *     parameters:
 *       - in: path
 *         name: clueId
 *         schema:
 *         type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Deleted a clue by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Clue'
 *       404:
 *         description: The clue was not found
 */

