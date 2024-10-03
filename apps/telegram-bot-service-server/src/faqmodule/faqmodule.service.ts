import { Injectable } from "@nestjs/common";
import { FaqDto } from "../faqModule/FaqDto";

@Injectable()
export class FaqModuleService {
  constructor() {}
  async AddFaq(args: FaqDto): Promise<FaqDto> {
    throw new Error("Not implemented");
  }
  async GetFaq(args: string): Promise<FaqDto[]> {
    throw new Error("Not implemented");
  }
}
