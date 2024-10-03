import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminModuleService } from "./adminmodule.service";
import { UserDto } from "../user/UserDto";

@swagger.ApiTags("adminModules")
@common.Controller("adminModules")
export class AdminModuleController {
  constructor(protected readonly service: AdminModuleService) {}

  @common.Post("/admin/assign-task")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AssignTaskToEmployee(
    @common.Body()
    body: UserDto
  ): Promise<string> {
        return this.service.AssignTaskToEmployee(body);
      }

  @common.Get("/admin/employees-tasks")
  @swagger.ApiOkResponse({
    type: UserDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetEmployeesWithTasks(
    @common.Body()
    body: string
  ): Promise<UserDto[]> {
        return this.service.GetEmployeesWithTasks(body);
      }

  @common.Post("/admin/manage-employees")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ManageEmployees(
    @common.Body()
    body: UserDto
  ): Promise<string> {
        return this.service.ManageEmployees(body);
      }

  @common.Post("/admin/complete-task")
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
