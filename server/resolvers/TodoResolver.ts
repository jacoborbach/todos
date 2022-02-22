import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Todo } from "../models/Todo";
// import { User } from "../models/User";
import { CreateTodoInput } from "../inputs/CreateTodoInput";

@Resolver()
export class TodoResolver {
  @Query(() => [Todo])
  todos() {
    return Todo.find();
  }

  @Query(() => Todo)
  todo(@Arg("id") id: string) {
    return Todo.findOne({ where: { id } });
  }

  @Mutation(() => Todo)
  async createTodo(@Arg("data") data: CreateTodoInput) {
    const todo = Todo.create(data);
    await todo.save();
    return todo;
  }
}
