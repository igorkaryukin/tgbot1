import * as graphql from "@nestjs/graphql";
import { UserDto } from "../user/UserDto";
import { CurrentTaskDto } from "../taskModule/CurrentTaskDto";
import { TaskModuleService } from "./taskmodule.service";

export class TaskModuleResolver {
  constructor(protected readonly service: TaskModuleService) {}

  @graphql.Mutation(() => UserDto)
  async AssignTask(
    @graphql.Args()
    args: UserDto
  ): Promise<UserDto> {
    return this.service.AssignTask(args);
  }

  @graphql.Query(() => CurrentTaskDto)
  async GetCurrentTask(
    @graphql.Args("args")
    args: string
  ): Promise<CurrentTaskDto> {
    return this.service.GetCurrentTask(args);
  }

  @graphql.Query(() => [UserDto])
  async GetTasks(
    @graphql.Args("args")
    args: string
  ): Promise<UserDto[]> {
    return this.service.GetTasks(args);
  }

  @graphql.Mutation(() => String)
  async NotifyTaskCompletion(
    @graphql.Args()
    args: UserDto
  ): Promise<string> {
    return this.service.NotifyTaskCompletion(args);
  }
}
