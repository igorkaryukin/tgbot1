import { Injectable } from "@nestjs/common";

@Injectable()
export class TelegramIntegrationService {
  constructor() {}
  async SendMessageToTelegram(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
