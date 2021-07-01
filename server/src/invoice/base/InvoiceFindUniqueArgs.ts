import { ArgsType, Field } from "@nestjs/graphql";
import { InvoiceWhereUniqueInput } from "./InvoiceWhereUniqueInput";

@ArgsType()
class InvoiceFindUniqueArgs {
  @Field(() => InvoiceWhereUniqueInput, { nullable: false })
  where!: InvoiceWhereUniqueInput;
}

export { InvoiceFindUniqueArgs };
