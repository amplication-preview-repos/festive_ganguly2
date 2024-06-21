import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServerCredentialService } from "./serverCredential.service";
import { ServerCredentialControllerBase } from "./base/serverCredential.controller.base";

@swagger.ApiTags("serverCredentials")
@common.Controller("serverCredentials")
export class ServerCredentialController extends ServerCredentialControllerBase {
  constructor(protected readonly service: ServerCredentialService) {
    super(service);
  }
}
