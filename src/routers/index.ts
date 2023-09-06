import * as express from 'express';
const predictionRouter = require('./prediction.route')
const router = express.Router();

router.use('/predictions', predictionRouter);

module.exports = router ;