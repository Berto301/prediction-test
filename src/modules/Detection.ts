import mongoose, { Schema, Document } from 'mongoose';

export interface IDetection extends Document {
  name: string;
  predictions: string[];
}

const detectionSchema: Schema = new Schema({
  name: { type: String, required: true },
  predictions: [{ type: Schema.Types.ObjectId, ref: 'Prediction' }], 
});

export default mongoose.model<IDetection>('Detection', detectionSchema);