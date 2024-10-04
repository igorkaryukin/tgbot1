import { Module } from "@nestjs/common";
import { TelegramIntegrationService } from "./telegramintegration.service";
import { TelegramIntegrationController } from "./telegramintegration.controller";
import { TelegramIntegrationResolver } from "./telegramintegration.resolver";

@Module({
  controllers: [TelegramIntegrationController],
  providers: [TelegramIntegrationService, TelegramIntegrationResolver],
  exports: [TelegramIntegrationService],
})
export class TelegramIntegrationModule {}
