import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SshService } from "./ssh.service";
import { SshConnectionInput } from "../ssh/SshConnectionInput";
import { SshConnectionOutput } from "../ssh/SshConnectionOutput";

@swagger.ApiTags("sshes")
@common.Controller("sshes")
export class SshController {
  constructor(protected readonly service: SshService) {}

  @common.Post("/initiate-ssh")
  @swagger.ApiOkResponse({
    type: SshConnectionOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InitiateSsh(
    @common.Body()
    body: SshConnectionInput
  ): Promise<SshConnectionOutput> {
        return this.service.InitiateSsh(body);
      }
}
