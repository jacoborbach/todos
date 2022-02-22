import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@Entity()
@ObjectType()
export class Todo extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  // @Field(() => ID)
  // @OneToMany(() => User, (user) => user.id)
  // @Column()
  // user_id: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Boolean)
  @Column({ default: true })
  status: boolean;
}
