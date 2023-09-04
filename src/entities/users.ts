import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BaseEntity,
  Generated,
  Index,
  CreateDateColumn
} from "typeorm";

import * as bcrypt from "bcrypt";
import { IsEmail, Length} from "class-validator";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Generated("uuid")
  id!: string;

  @Column()
  @Length(1, 100)
  name: string;

  @Column({ unique: true })
  @IsEmail() // Email should be a valid email address
  @Index({ unique: true }) // Creates a database index for email
  email: string;

  @Column()
  @Length(8, 100) // Password should be between 8 and 100 characters long
  password: string;

  @Column()
  google: boolean;
  
  @CreateDateColumn({
    type: "timestamp",
    name: "createdAt",
    nullable: false,
  })
  createdAt!: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}

