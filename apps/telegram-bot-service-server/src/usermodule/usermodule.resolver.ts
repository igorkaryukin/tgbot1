import * as graphql from "@nestjs/graphql";
import { UserDto } from "../user/UserDto";
import { UserLoginInput } from "../user/UserLoginInput";
import { UserRegisterInput } from "../user/UserRegisterInput";
import { UserModuleService } from "./usermodule.service";

export class UserModuleResolver {
  constructor(protected readonly service: UserModuleService) {}

  @graphql.Query(() => UserDto)
  async GetUserProfile(
    @graphql.Args("args")
    args: string
  ): Promise<UserDto> {
    return this.service.GetUserProfile(args);
  }

  @graphql.Mutation(() => UserDto)
  async LoginUser(
    @graphql.Args()
    args: UserLoginInput
  ): Promise<UserDto> {
    return this.service.LoginUser(args);
  }

  @graphql.Mutation(() => UserDto)
  async RegisterUser(
    @graphql.Args()
    args: UserRegisterInput
  ): Promise<UserDto> {
    return this.service.RegisterUser(args);
  }
}
