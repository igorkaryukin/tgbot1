import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserModuleService } from "./usermodule.service";
import { UserDto } from "../user/UserDto";
import { UserLoginInput } from "../user/UserLoginInput";
import { UserRegisterInput } from "../user/UserRegisterInput";

@swagger.ApiTags("userModules")
@common.Controller("userModules")
export class UserModuleController {
  constructor(protected readonly service: UserModuleService) {}

  @common.Get("/profile")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetUserProfile(
    @common.Body()
    body: string
  ): Promise<UserDto> {
        return this.service.GetUserProfile(body);
      }

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async LoginUser(
    @common.Body()
    body: UserLoginInput
  ): Promise<UserDto> {
        return this.service.LoginUser(body);
      }

  @common.Post("/register")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RegisterUser(
    @common.Body()
    body: UserRegisterInput
  ): Promise<UserDto> {
        return this.service.RegisterUser(body);
      }
}
