/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ServerCredentialService } from "../serverCredential.service";
import { ServerCredentialCreateInput } from "./ServerCredentialCreateInput";
import { ServerCredential } from "./ServerCredential";
import { ServerCredentialFindManyArgs } from "./ServerCredentialFindManyArgs";
import { ServerCredentialWhereUniqueInput } from "./ServerCredentialWhereUniqueInput";
import { ServerCredentialUpdateInput } from "./ServerCredentialUpdateInput";

export class ServerCredentialControllerBase {
  constructor(protected readonly service: ServerCredentialService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ServerCredential })
  async createServerCredential(
    @common.Body() data: ServerCredentialCreateInput
  ): Promise<ServerCredential> {
    return await this.service.createServerCredential({
      data: data,
      select: {
        createdAt: true,
        hostname: true,
        id: true,
        name: true,
        port: true,
        privateKey: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ServerCredential] })
  @ApiNestedQuery(ServerCredentialFindManyArgs)
  async serverCredentials(
    @common.Req() request: Request
  ): Promise<ServerCredential[]> {
    const args = plainToClass(ServerCredentialFindManyArgs, request.query);
    return this.service.serverCredentials({
      ...args,
      select: {
        createdAt: true,
        hostname: true,
        id: true,
        name: true,
        port: true,
        privateKey: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ServerCredential })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async serverCredential(
    @common.Param() params: ServerCredentialWhereUniqueInput
  ): Promise<ServerCredential | null> {
    const result = await this.service.serverCredential({
      where: params,
      select: {
        createdAt: true,
        hostname: true,
        id: true,
        name: true,
        port: true,
        privateKey: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ServerCredential })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateServerCredential(
    @common.Param() params: ServerCredentialWhereUniqueInput,
    @common.Body() data: ServerCredentialUpdateInput
  ): Promise<ServerCredential | null> {
    try {
      return await this.service.updateServerCredential({
        where: params,
        data: data,
        select: {
          createdAt: true,
          hostname: true,
          id: true,
          name: true,
          port: true,
          privateKey: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ServerCredential })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteServerCredential(
    @common.Param() params: ServerCredentialWhereUniqueInput
  ): Promise<ServerCredential | null> {
    try {
      return await this.service.deleteServerCredential({
        where: params,
        select: {
          createdAt: true,
          hostname: true,
          id: true,
          name: true,
          port: true,
          privateKey: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
