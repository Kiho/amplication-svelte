import { ArgsType, Field } from "@nestjs/graphql";
import { InvoiceCreateInput } from "./InvoiceCreateInput";

@ArgsType()
class CreateInvoiceArgs {
  @Field(() => InvoiceCreateInput, { nullable: false })
  data!: InvoiceCreateInput;
}

export { CreateInvoiceArgs };
