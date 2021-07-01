import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InvoiceService } from "./invoice.service";
import { InvoiceControllerBase } from "./base/invoice.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("invoices")
@common.Controller("invoices")
export class InvoiceController extends InvoiceControllerBase {
  constructor(
    protected readonly service: InvoiceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
