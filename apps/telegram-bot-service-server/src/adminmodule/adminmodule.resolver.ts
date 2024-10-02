import * as graphql from "@nestjs/graphql";
import { UserDto } from "../user/UserDto";
import { AdminModuleService } from "./adminmodule.service";

export class AdminModuleResolver {
  constructor(protected readonly service: AdminModuleService) {}

  @graphql.Mutation(() => String)
  async AssignTaskToEmployee(
    @graphql.Args()
    args: UserDto
  ): Promise<string> {
    return this.service.AssignTaskToEmployee(args);
  }

  @graphql.Query(() => [UserDto])
  async GetEmployeesWithTasks(
    @graphql.Args("args")
    args: string
  ): Promise<UserDto[]> {
    return this.service.GetEmployeesWithTasks(args);
  }

  @graphql.Mutation(() => String)
  async ManageEmployees(
    @graphql.Args()
    args: UserDto
  ): Promise<string> {
    return this.service.ManageEmployees(args);
  }

  @graphql.Mutation(() => String)
  async NotifyTaskCompletion(
    @graphql.Args()
    args: UserDto
  ): Promise<string> {
    return this.service.NotifyTaskCompletion(args);
  }
}
