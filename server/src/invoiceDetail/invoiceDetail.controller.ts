import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvoiceDetailService } from "./invoiceDetail.service";
import { InvoiceDetailControllerBase } from "./base/invoiceDetail.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("invoice-details")
@common.Controller("invoice-details")
export class InvoiceDetailController extends InvoiceDetailControllerBase {
  constructor(
    protected readonly service: InvoiceDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
