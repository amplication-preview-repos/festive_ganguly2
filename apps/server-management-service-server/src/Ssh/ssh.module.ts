import { Module } from "@nestjs/common";
import { SshService } from "./ssh.service";
import { SshController } from "./ssh.controller";
import { SshResolver } from "./ssh.resolver";

@Module({
  controllers: [SshController],
  providers: [SshService, SshResolver],
  exports: [SshService],
})
export class SshModule {}
