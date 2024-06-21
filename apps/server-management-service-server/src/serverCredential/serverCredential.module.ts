import { Module } from "@nestjs/common";
import { ServerCredentialModuleBase } from "./base/serverCredential.module.base";
import { ServerCredentialService } from "./serverCredential.service";
import { ServerCredentialController } from "./serverCredential.controller";
import { ServerCredentialResolver } from "./serverCredential.resolver";

@Module({
  imports: [ServerCredentialModuleBase],
  controllers: [ServerCredentialController],
  providers: [ServerCredentialService, ServerCredentialResolver],
  exports: [ServerCredentialService],
})
export class ServerCredentialModule {}
