interface IBasic {
  model: string;
  year: number;
  color: string;
  status: boolean;
  buyValue: number;
}

interface ICar extends IBasic {
  doorsQty: number;
  seatsQty: number;
}

export default ICar;