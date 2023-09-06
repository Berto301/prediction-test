import { Request, Response } from 'express';
import PredictionModel, { IPrediction } from '../modules/Prediction';

export class PredictionController {
  addPrediction(req: Request, res: Response): void {
    const predictionData: IPrediction = req.body; 

    const prediction = new PredictionModel(predictionData);

    prediction
      .save()
      .then((savedPrediction) => {
        res.status(201).json(savedPrediction);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to add prediction' });
      });
  }

  getAllPredictions(req: Request, res: Response): void {
    PredictionModel.find()
      .then((predictions) => {
        res.status(200).json(predictions);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to retrieve predictions' });
      });
  }
}