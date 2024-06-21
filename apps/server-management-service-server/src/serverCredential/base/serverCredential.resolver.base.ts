/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ServerCredential } from "./ServerCredential";
import { ServerCredentialCountArgs } from "./ServerCredentialCountArgs";
import { ServerCredentialFindManyArgs } from "./ServerCredentialFindManyArgs";
import { ServerCredentialFindUniqueArgs } from "./ServerCredentialFindUniqueArgs";
import { CreateServerCredentialArgs } from "./CreateServerCredentialArgs";
import { UpdateServerCredentialArgs } from "./UpdateServerCredentialArgs";
import { DeleteServerCredentialArgs } from "./DeleteServerCredentialArgs";
import { ServerCredentialService } from "../serverCredential.service";
@graphql.Resolver(() => ServerCredential)
export class ServerCredentialResolverBase {
  constructor(protected readonly service: ServerCredentialService) {}

  async _serverCredentialsMeta(
    @graphql.Args() args: ServerCredentialCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ServerCredential])
  async serverCredentials(
    @graphql.Args() args: ServerCredentialFindManyArgs
  ): Promise<ServerCredential[]> {
    return this.service.serverCredentials(args);
  }

  @graphql.Query(() => ServerCredential, { nullable: true })
  async serverCredential(
    @graphql.Args() args: ServerCredentialFindUniqueArgs
  ): Promise<ServerCredential | null> {
    const result = await this.service.serverCredential(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ServerCredential)
  async createServerCredential(
    @graphql.Args() args: CreateServerCredentialArgs
  ): Promise<ServerCredential> {
    return await this.service.createServerCredential({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ServerCredential)
  async updateServerCredential(
    @graphql.Args() args: UpdateServerCredentialArgs
  ): Promise<ServerCredential | null> {
    try {
      return await this.service.updateServerCredential({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ServerCredential)
  async deleteServerCredential(
    @graphql.Args() args: DeleteServerCredentialArgs
  ): Promise<ServerCredential | null> {
    try {
      return await this.service.deleteServerCredential(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
