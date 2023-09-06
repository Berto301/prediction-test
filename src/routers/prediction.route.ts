import { Router } from 'express';
import { PredictionController } from '../controllers/PredictionController';

const predictionRouter = Router();
const predictionController = new PredictionController();

predictionRouter.post('/', predictionController.addPrediction);
predictionRouter.get('/', predictionController.getAllPredictions.bind(predictionController));

module.exports = predictionRouter ;