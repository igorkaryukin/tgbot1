import { Module } from "@nestjs/common";
import { ChatModule } from "./chat/chat.module";
import { MessageModule } from "./message/message.module";
import { KeywordModule } from "./keyword/keyword.module";
import { UserModule } from "./user/user.module";
import { TaskModule } from "./task/task.module";
import { FaqModule } from "./faq/faq.module";
import { AdminModuleModule } from "./adminmodule/adminmodule.module";
import { FaqModuleModule } from "./faqmodule/faqmodule.module";
import { TaskModuleModule } from "./taskmodule/taskmodule.module";
import { UserModuleModule } from "./usermodule/usermodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    ChatModule,
    MessageModule,
    KeywordModule,
    UserModule,
    TaskModule,
    FaqModule,
    AdminModuleModule,
    FaqModuleModule,
    TaskModuleModule,
    UserModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
