import { Module } from "@nestjs/common";
import { TaskModuleService } from "./taskmodule.service";
import { TaskModuleController } from "./taskmodule.controller";
import { TaskModuleResolver } from "./taskmodule.resolver";

@Module({
  controllers: [TaskModuleController],
  providers: [TaskModuleService, TaskModuleResolver],
  exports: [TaskModuleService],
})
export class TaskModuleModule {}
