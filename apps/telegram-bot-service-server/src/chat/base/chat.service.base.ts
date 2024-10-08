/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Chat as PrismaChat,
  Message as PrismaMessage,
} from "@prisma/client";

export class ChatServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ChatCountArgs, "select">): Promise<number> {
    return this.prisma.chat.count(args);
  }

  async chats(args: Prisma.ChatFindManyArgs): Promise<PrismaChat[]> {
    return this.prisma.chat.findMany(args);
  }
  async chat(args: Prisma.ChatFindUniqueArgs): Promise<PrismaChat | null> {
    return this.prisma.chat.findUnique(args);
  }
  async createChat(args: Prisma.ChatCreateArgs): Promise<PrismaChat> {
    return this.prisma.chat.create(args);
  }
  async updateChat(args: Prisma.ChatUpdateArgs): Promise<PrismaChat> {
    return this.prisma.chat.update(args);
  }
  async deleteChat(args: Prisma.ChatDeleteArgs): Promise<PrismaChat> {
    return this.prisma.chat.delete(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.chat
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }
}
