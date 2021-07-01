import { ArgsType, Field } from "@nestjs/graphql";
import { InvoiceDetailWhereUniqueInput } from "./InvoiceDetailWhereUniqueInput";
import { InvoiceDetailUpdateInput } from "./InvoiceDetailUpdateInput";

@ArgsType()
class UpdateInvoiceDetailArgs {
  @Field(() => InvoiceDetailWhereUniqueInput, { nullable: false })
  where!: InvoiceDetailWhereUniqueInput;
  @Field(() => InvoiceDetailUpdateInput, { nullable: false })
  data!: InvoiceDetailUpdateInput;
}

export { UpdateInvoiceDetailArgs };
