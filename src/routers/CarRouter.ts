import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';

const route = Router();
const carModel = new CarModel();
const carController = new CarController(carModel);