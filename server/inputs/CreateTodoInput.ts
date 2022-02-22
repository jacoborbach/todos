import { InputType, Field } from "type-graphql";

@InputType()
export class CreateTodoInput {
  //   @Field()
  //   user_id: string;

  @Field()
  description: string;

  @Field()
  status: boolean;
}
