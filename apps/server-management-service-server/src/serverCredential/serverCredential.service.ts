import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServerCredentialServiceBase } from "./base/serverCredential.service.base";

@Injectable()
export class ServerCredentialService extends ServerCredentialServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
