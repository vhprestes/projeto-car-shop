// fix: id = string pq number é só quando faz calculo
interface IVehicle {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean;
  buyValue: number;
}

interface ICar extends IVehicle {
  doorsQty: number;
  seatsQty: number;
}

export default ICar;