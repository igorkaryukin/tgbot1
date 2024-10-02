import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FaqService } from "./faq.service";
import { FaqControllerBase } from "./base/faq.controller.base";

@swagger.ApiTags("faqs")
@common.Controller("faqs")
export class FaqController extends FaqControllerBase {
  constructor(
    protected readonly service: FaqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
