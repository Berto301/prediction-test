import { Router } from 'express';
import { addDetection, getDetections } from '../controllers/DetectionController';

const router = Router();

router.post('/', addDetection);
router.get('/', getDetections);

module.exports = router ;