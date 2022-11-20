// adiantando o 5
import IVehicle from './ICar';

interface IMotorcycle extends IVehicle {
  category: string;
  engineCapacity: number;
}

export default IMotorcycle;