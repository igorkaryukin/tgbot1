import { Module } from "@nestjs/common";
import { AdminModuleService } from "./adminmodule.service";
import { AdminModuleController } from "./adminmodule.controller";
import { AdminModuleResolver } from "./adminmodule.resolver";

@Module({
  controllers: [AdminModuleController],
  providers: [AdminModuleService, AdminModuleResolver],
  exports: [AdminModuleService],
})
export class AdminModuleModule {}
