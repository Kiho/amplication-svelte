import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvoiceWhereInput } from "./InvoiceWhereInput";
import { Type } from "class-transformer";
import { InvoiceOrderByInput } from "./InvoiceOrderByInput";

@ArgsType()
class InvoiceFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InvoiceWhereInput,
  })
  @Field(() => InvoiceWhereInput, { nullable: true })
  @Type(() => InvoiceWhereInput)
  where?: InvoiceWhereInput;

  @ApiProperty({
    required: false,
    type: InvoiceOrderByInput,
  })
  @Field(() => InvoiceOrderByInput, { nullable: true })
  @Type(() => InvoiceOrderByInput)
  orderBy?: InvoiceOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InvoiceFindManyArgs };
