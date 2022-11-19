import Car from '../Models/Car';
import CarODM from '../Domains/Car';
import ICar from '../Interfaces/ICar';

export default class CarService {
  private model: Car;

  constructor() {
    this.model = new Car();
  }

  public async create(car: ICar) {
    const newCar = await this.model.create(car);
    return new CarODM(newCar);
  }

  public async update(id: string, d: Partial<ICar>) {
    const update = await this.model.update(id, d);
    if (update) return new CarODM(update);
  }

  public async findAll() {
    const findAll = await this.model.findAll();
    return findAll.map((car) => new CarODM(car));
  }

  public async findById(id: string) {
    const validation = await this.model.findById(id);
    if (validation) return new CarODM(validation);
  }
}