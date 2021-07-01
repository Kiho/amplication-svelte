import { ArgsType, Field } from "@nestjs/graphql";
import { InvoiceDetailWhereUniqueInput } from "./InvoiceDetailWhereUniqueInput";

@ArgsType()
class DeleteInvoiceDetailArgs {
  @Field(() => InvoiceDetailWhereUniqueInput, { nullable: false })
  where!: InvoiceDetailWhereUniqueInput;
}

export { DeleteInvoiceDetailArgs };
