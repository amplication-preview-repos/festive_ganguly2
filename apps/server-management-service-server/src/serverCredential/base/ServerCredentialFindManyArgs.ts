/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServerCredentialWhereInput } from "./ServerCredentialWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ServerCredentialOrderByInput } from "./ServerCredentialOrderByInput";

@ArgsType()
class ServerCredentialFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ServerCredentialWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ServerCredentialWhereInput, { nullable: true })
  @Type(() => ServerCredentialWhereInput)
  where?: ServerCredentialWhereInput;

  @ApiProperty({
    required: false,
    type: [ServerCredentialOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ServerCredentialOrderByInput], { nullable: true })
  @Type(() => ServerCredentialOrderByInput)
  orderBy?: Array<ServerCredentialOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ServerCredentialFindManyArgs as ServerCredentialFindManyArgs };