import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TelegramIntegrationService } from "./telegramintegration.service";

@swagger.ApiTags("telegramIntegrations")
@common.Controller("telegramIntegrations")
export class TelegramIntegrationController {
  constructor(protected readonly service: TelegramIntegrationService) {}

  @common.Post("/sendMessage")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SendMessageToTelegram(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SendMessageToTelegram(body);
      }
}
