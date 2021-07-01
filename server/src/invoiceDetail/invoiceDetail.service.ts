import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { InvoiceDetailServiceBase } from "./base/invoiceDetail.service.base";

@Injectable()
export class InvoiceDetailService extends InvoiceDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
