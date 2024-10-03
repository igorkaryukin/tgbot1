import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TaskModuleService } from "./taskmodule.service";
import { UserDto } from "../user/UserDto";
import { CurrentTaskDto } from "../taskModule/CurrentTaskDto";

@swagger.ApiTags("taskModules")
@common.Controller("taskModules")
export class TaskModuleController {
  constructor(protected readonly service: TaskModuleService) {}

  @common.Post("/tasks/assign")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AssignTask(
    @common.Body()
    body: UserDto
  ): Promise<UserDto> {
        return this.service.AssignTask(body);
      }

  @common.Get("/tasks/current")
  @swagger.ApiOkResponse({
    type: CurrentTaskDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetCurrentTask(
    @common.Body()
    body: string
  ): Promise<CurrentTaskDto> {
        return this.service.GetCurrentTask(body);
      }

  @common.Get("/tasks")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTasks(
    @common.Body()
    body: string
  ): Promise<UserDto[]> {
        return this.service.GetTasks(body);
      }

  @common.Post("/tasks/complete")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async NotifyTaskCompletion(
    @common.Body()
    body: UserDto
  ): Promise<string> {
        return this.service.NotifyTaskCompletion(body);
      }
}
