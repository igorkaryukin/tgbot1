import { Module } from "@nestjs/common";
import { CommandsService } from "./commands.service";
import { CommandsController } from "./commands.controller";
import { CommandsResolver } from "./commands.resolver";

@Module({
  controllers: [CommandsController],
  providers: [CommandsService, CommandsResolver],
  exports: [CommandsService],
})
export class CommandsModule {}
