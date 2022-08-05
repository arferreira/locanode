import { uuid as uuidV4 } from 'uuidv4';

class Specification {

  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

}



export { Specification }