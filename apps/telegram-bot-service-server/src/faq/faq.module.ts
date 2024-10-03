import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FaqModuleBase } from "./base/faq.module.base";
import { FaqService } from "./faq.service";
import { FaqController } from "./faq.controller";
import { FaqResolver } from "./faq.resolver";

@Module({
  imports: [FaqModuleBase, forwardRef(() => AuthModule)],
  controllers: [FaqController],
  providers: [FaqService, FaqResolver],
  exports: [FaqService],
})
export class FaqModule {}
