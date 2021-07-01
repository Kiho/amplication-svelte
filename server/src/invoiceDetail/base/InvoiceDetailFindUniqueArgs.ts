import { ArgsType, Field } from "@nestjs/graphql";
import { InvoiceDetailWhereUniqueInput } from "./InvoiceDetailWhereUniqueInput";

@ArgsType()
class InvoiceDetailFindUniqueArgs {
  @Field(() => InvoiceDetailWhereUniqueInput, { nullable: false })
  where!: InvoiceDetailWhereUniqueInput;
}

export { InvoiceDetailFindUniqueArgs };
