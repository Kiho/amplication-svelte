import { Module } from "@nestjs/common";
import { InvoiceDetailModuleBase } from "./base/invoiceDetail.module.base";
import { InvoiceDetailService } from "./invoiceDetail.service";
import { InvoiceDetailController } from "./invoiceDetail.controller";
import { InvoiceDetailResolver } from "./invoiceDetail.resolver";

@Module({
  imports: [InvoiceDetailModuleBase],
  controllers: [InvoiceDetailController],
  providers: [InvoiceDetailService, InvoiceDetailResolver],
  exports: [InvoiceDetailService],
})
export class InvoiceDetailModule {}
