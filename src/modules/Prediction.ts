import mongoose, { Document, Schema } from 'mongoose';

export interface PredictionData {
  faceID: string;
  frameNumber: number;
  gender: string;
  age: string;
  emotion: string;
  glasses: string;
  race: string;
  looking: string;
}

export interface IPrediction extends Document {
  device_id: string;
  media_type: string;
  datas: PredictionData[];
}

const PredictionSchema = new Schema<IPrediction>({
  device_id: String,
  media_type: String,
  datas: [
    {
      faceID: String,
      frameNumber: Number,
      gender: String,
      age: String,
      emotion: String,
      glasses: String,
      race: String,
      looking: String,
    },
  ],
});

const PredictionModel = mongoose.model<IPrediction>('Prediction', PredictionSchema);

export default PredictionModel;