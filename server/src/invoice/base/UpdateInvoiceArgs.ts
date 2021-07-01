import { ArgsType, Field } from "@nestjs/graphql";
import { InvoiceWhereUniqueInput } from "./InvoiceWhereUniqueInput";
import { InvoiceUpdateInput } from "./InvoiceUpdateInput";

@ArgsType()
class UpdateInvoiceArgs {
  @Field(() => InvoiceWhereUniqueInput, { nullable: false })
  where!: InvoiceWhereUniqueInput;
  @Field(() => InvoiceUpdateInput, { nullable: false })
  data!: InvoiceUpdateInput;
}

export { UpdateInvoiceArgs };
