import { Injectable } from "@nestjs/common";
import { SshConnectionInput } from "../ssh/SshConnectionInput";
import { SshConnectionOutput } from "../ssh/SshConnectionOutput";

@Injectable()
export class SshService {
  constructor() {}
  async InitiateSsh(args: SshConnectionInput): Promise<SshConnectionOutput> {
    throw new Error("Not implemented");
  }
}
