import * as graphql from "@nestjs/graphql";
import { SshConnectionInput } from "../ssh/SshConnectionInput";
import { SshConnectionOutput } from "../ssh/SshConnectionOutput";
import { SshService } from "./ssh.service";

export class SshResolver {
  constructor(protected readonly service: SshService) {}

  @graphql.Mutation(() => SshConnectionOutput)
  async InitiateSsh(
    @graphql.Args()
    args: SshConnectionInput
  ): Promise<SshConnectionOutput> {
    return this.service.InitiateSsh(args);
  }
}
