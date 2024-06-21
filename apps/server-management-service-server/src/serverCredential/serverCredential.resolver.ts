import * as graphql from "@nestjs/graphql";
import { ServerCredentialResolverBase } from "./base/serverCredential.resolver.base";
import { ServerCredential } from "./base/ServerCredential";
import { ServerCredentialService } from "./serverCredential.service";

@graphql.Resolver(() => ServerCredential)
export class ServerCredentialResolver extends ServerCredentialResolverBase {
  constructor(protected readonly service: ServerCredentialService) {
    super(service);
  }
}
