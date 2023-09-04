import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    Generated
  } from "typeorm";
  
  @Entity({ name: "tricks" })
  export class Trick extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    @Generated("uuid")
    id!: string;
  
    @Column({ nullable: false })
    name!: string;
    
    @Column({ nullable: false })
    description!: string;

    @Column({ nullable: false })
    imageUrl!: string;

    @Column({ nullable: false })
    videoUrl!: string;

    @CreateDateColumn({
      type: "timestamp",
      name: "createdAt",
      nullable: false,
    })
    createdAt!: Date;

    @CreateDateColumn({
      type: "timestamp",
      name: "updatedAt",
      nullable: true,
    })
    updatedAt!: Date;
  }
  