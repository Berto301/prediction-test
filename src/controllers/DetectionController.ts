import { Request, Response } from 'express';
import DetectionModel, { IDetection } from '../modules/Detection';

export const addDetection = async (req: Request, res: Response) => {
  const { name, predictionIds }: { name: string; predictionIds: string[] } = req.body;

  try {
    if (predictionIds.length < 5) {
      return res.status(400).json({ message: 'A valid detection must have at least 5 predictions' });
    }
    const newDetection: IDetection = new DetectionModel({ name, predictions: predictionIds });
    await newDetection.save();
    res.status(201).json({ message: 'Detection added successfully', detection: newDetection });
  } catch (error) {
    console.error('Error adding detection:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getDetections = async (req: Request, res: Response) => {
  try {
    const detections: IDetection[] = await DetectionModel.find().populate('predictions'); 
    res.json(detections);
  } catch (error) {
    console.error('Error fetching detections:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};