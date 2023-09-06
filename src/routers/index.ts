import * as express from 'express';
const predictionRouter = require('./prediction.route')
const detectionRouter = require('./detection.route')
const router = express.Router();

router.use('/predictions', predictionRouter);
router.use('/detections', detectionRouter);
module.exports = router ;