import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


@Entity("users")
class User {

  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  driver_licence: string;

  @Column()
  avatar?: string;

  @Column()
  is_admin: boolean;

  @CreateDateColumn()
  created_at: Date;


  constructor() {
    if (!this.id) {
      this.id = uuidv4()
    }
    if (!this.is_admin) {
      this.is_admin = false;
    }
    if (!this.avatar) {
      this.avatar = "http://localhost";
    }
  }

}

export { User }