import * as graphql from "@nestjs/graphql";
import { FaqDto } from "../faqModule/FaqDto";
import { FaqModuleService } from "./faqmodule.service";

export class FaqModuleResolver {
  constructor(protected readonly service: FaqModuleService) {}

  @graphql.Mutation(() => FaqDto)
  async AddFaq(
    @graphql.Args()
    args: FaqDto
  ): Promise<FaqDto> {
    return this.service.AddFaq(args);
  }

  @graphql.Query(() => [FaqDto])
  async GetFaq(
    @graphql.Args("args")
    args: string
  ): Promise<FaqDto[]> {
    return this.service.GetFaq(args);
  }
}
