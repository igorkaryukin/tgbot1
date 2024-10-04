import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CommandsService } from "./commands.service";

@swagger.ApiTags("commands")
@common.Controller("commands")
export class CommandsController {
  constructor(protected readonly service: CommandsService) {}

  @common.Get("/admin/active-users")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ActiveUsersCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ActiveUsersCommand(body);
      }

  @common.Post("/admin/add-task")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddTaskCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AddTaskCommand(body);
      }

  @common.Get("/admin/tasks")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AdminTasksCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AdminTasksCommand(body);
      }

  @common.Get("/faq")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FaqCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FaqCommand(body);
      }

  @common.Post("/profile")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProfileCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProfileCommand(body);
      }

  @common.Get("/rewards")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RewardsCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RewardsCommand(body);
      }

  @common.Post("/start")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async StartCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.StartCommand(body);
      }

  @common.Get("/tasks")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TasksCommand(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.TasksCommand(body);
      }
}
