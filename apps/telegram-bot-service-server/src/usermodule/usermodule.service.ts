import { Injectable } from "@nestjs/common";
import { UserDto } from "../user/UserDto";
import { UserLoginInput } from "../user/UserLoginInput";
import { UserRegisterInput } from "../user/UserRegisterInput";

@Injectable()
export class UserModuleService {
  constructor() {}
  async GetUserProfile(args: string): Promise<UserDto> {
    throw new Error("Not implemented");
  }
  async LoginUser(args: UserLoginInput): Promise<UserDto> {
    throw new Error("Not implemented");
  }
  async RegisterUser(args: UserRegisterInput): Promise<UserDto> {
    throw new Error("Not implemented");
  }
}
