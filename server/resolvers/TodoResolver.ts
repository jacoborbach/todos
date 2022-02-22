import { Resolver, Query } from "type-graphql";
import { Todo } from "../models/Todo";

@Resolver()
export class TodoResolver {
  @Query(() => [Todo])
  todos() {
    return Todo.find();
  }
}
