import { ArgsType, Field } from "@nestjs/graphql";
import { InvoiceDetailCreateInput } from "./InvoiceDetailCreateInput";

@ArgsType()
class CreateInvoiceDetailArgs {
  @Field(() => InvoiceDetailCreateInput, { nullable: false })
  data!: InvoiceDetailCreateInput;
}

export { CreateInvoiceDetailArgs };
