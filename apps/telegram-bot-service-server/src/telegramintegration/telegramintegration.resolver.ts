import * as graphql from "@nestjs/graphql";
import { TelegramIntegrationService } from "./telegramintegration.service";

export class TelegramIntegrationResolver {
  constructor(protected readonly service: TelegramIntegrationService) {}

  @graphql.Mutation(() => String)
  async SendMessageToTelegram(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.SendMessageToTelegram(args);
  }
}
