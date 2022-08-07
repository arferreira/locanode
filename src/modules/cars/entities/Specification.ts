import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { uuid as uuidV4 } from 'uuidv4';

@Entity("specifications")
class Specification {

  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }

}



export { Specification }