import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FaqModuleService } from "./faqmodule.service";
import { FaqDto } from "../faqModule/FaqDto";

@swagger.ApiTags("faqModules")
@common.Controller("faqModules")
export class FaqModuleController {
  constructor(protected readonly service: FaqModuleService) {}

  @common.Post("/faq")
  @swagger.ApiOkResponse({
    type: FaqDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddFaq(
    @common.Body()
    body: FaqDto
  ): Promise<FaqDto> {
        return this.service.AddFaq(body);
      }

  @common.Get("/faq")
  @swagger.ApiOkResponse({
    type: FaqDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetFaq(
    @common.Body()
    body: string
  ): Promise<FaqDto[]> {
        return this.service.GetFaq(body);
      }
}
