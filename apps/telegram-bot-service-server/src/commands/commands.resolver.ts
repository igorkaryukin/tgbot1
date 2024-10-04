import * as graphql from "@nestjs/graphql";
import { CommandsService } from "./commands.service";

export class CommandsResolver {
  constructor(protected readonly service: CommandsService) {}

  @graphql.Query(() => String)
  async ActiveUsersCommand(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ActiveUsersCommand(args);
  }

  @graphql.Mutation(() => String)
  async AddTaskCommand(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.AddTaskCommand(args);
  }

  @graphql.Query(() => String)
  async AdminTasksCommand(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.AdminTasksCommand(args);
  }

  @graphql.Query(() => String)
  async FaqCommand(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.FaqCommand(args);
  }

  @graphql.Mutation(() => String)
  async ProfileCommand(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.ProfileCommand(args);
  }

  @graphql.Query(() => String)
  async RewardsCommand(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.RewardsCommand(args);
  }

  @graphql.Mutation(() => String)
  async StartCommand(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.StartCommand(args);
  }

  @graphql.Query(() => String)
  async TasksCommand(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.TasksCommand(args);
  }
}
