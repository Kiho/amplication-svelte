import { PrismaService } from "nestjs-prisma";
import { Prisma, InvoiceDetail, Address, Invoice } from "@prisma/client";

export class InvoiceDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.InvoiceDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceDetailFindManyArgs>
  ): Promise<number> {
    return this.prisma.invoiceDetail.count(args);
  }

  async findMany<T extends Prisma.InvoiceDetailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceDetailFindManyArgs>
  ): Promise<InvoiceDetail[]> {
    return this.prisma.invoiceDetail.findMany(args);
  }
  async findOne<T extends Prisma.InvoiceDetailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceDetailFindUniqueArgs>
  ): Promise<InvoiceDetail | null> {
    return this.prisma.invoiceDetail.findUnique(args);
  }
  async create<T extends Prisma.InvoiceDetailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceDetailCreateArgs>
  ): Promise<InvoiceDetail> {
    return this.prisma.invoiceDetail.create<T>(args);
  }
  async update<T extends Prisma.InvoiceDetailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceDetailUpdateArgs>
  ): Promise<InvoiceDetail> {
    return this.prisma.invoiceDetail.update<T>(args);
  }
  async delete<T extends Prisma.InvoiceDetailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InvoiceDetailDeleteArgs>
  ): Promise<InvoiceDetail> {
    return this.prisma.invoiceDetail.delete(args);
  }

  async getAddress(parentId: string): Promise<Address | null> {
    return this.prisma.invoiceDetail
      .findUnique({
        where: { id: parentId },
      })
      .address();
  }

  async getInvoice(parentId: string): Promise<Invoice | null> {
    return this.prisma.invoiceDetail
      .findUnique({
        where: { id: parentId },
      })
      .invoice();
  }
}
