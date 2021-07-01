import { ArgsType, Field } from "@nestjs/graphql";
import { InvoiceWhereUniqueInput } from "./InvoiceWhereUniqueInput";

@ArgsType()
class DeleteInvoiceArgs {
  @Field(() => InvoiceWhereUniqueInput, { nullable: false })
  where!: InvoiceWhereUniqueInput;
}

export { DeleteInvoiceArgs };
