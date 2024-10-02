import { Module } from "@nestjs/common";
import { FaqModuleService } from "./faqmodule.service";
import { FaqModuleController } from "./faqmodule.controller";
import { FaqModuleResolver } from "./faqmodule.resolver";

@Module({
  controllers: [FaqModuleController],
  providers: [FaqModuleService, FaqModuleResolver],
  exports: [FaqModuleService],
})
export class FaqModuleModule {}
