import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvoiceDetailWhereInput } from "./InvoiceDetailWhereInput";
import { Type } from "class-transformer";
import { InvoiceDetailOrderByInput } from "./InvoiceDetailOrderByInput";

@ArgsType()
class InvoiceDetailFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InvoiceDetailWhereInput,
  })
  @Field(() => InvoiceDetailWhereInput, { nullable: true })
  @Type(() => InvoiceDetailWhereInput)
  where?: InvoiceDetailWhereInput;

  @ApiProperty({
    required: false,
    type: InvoiceDetailOrderByInput,
  })
  @Field(() => InvoiceDetailOrderByInput, { nullable: true })
  @Type(() => InvoiceDetailOrderByInput)
  orderBy?: InvoiceDetailOrderByInput;

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

export { InvoiceDetailFindManyArgs };
