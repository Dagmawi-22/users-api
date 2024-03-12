import { Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  // A blueprint or a model for a User
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Unique
  @Column
  email: string;

  @Unique
  @Column
  phone: string;
}
