import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class SshConnectionInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    hostname!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    port!: number;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    username!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    privateKey!: string;
}

export { SshConnectionInput as SshConnectionInput };