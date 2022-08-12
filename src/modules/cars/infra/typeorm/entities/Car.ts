import { uuid } from "uuidv4";

export class Car {
  id: string;
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;


  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}