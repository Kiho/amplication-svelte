import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { InvoiceDetailResolverBase } from "./base/invoiceDetail.resolver.base";
import { InvoiceDetail } from "./base/InvoiceDetail";
import { InvoiceDetailService } from "./invoiceDetail.service";

@graphql.Resolver(() => InvoiceDetail)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class InvoiceDetailResolver extends InvoiceDetailResolverBase {
  constructor(
    protected readonly service: InvoiceDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
