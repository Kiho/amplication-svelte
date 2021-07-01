import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateInvoiceDetailArgs } from "./CreateInvoiceDetailArgs";
import { UpdateInvoiceDetailArgs } from "./UpdateInvoiceDetailArgs";
import { DeleteInvoiceDetailArgs } from "./DeleteInvoiceDetailArgs";
import { InvoiceDetailFindManyArgs } from "./InvoiceDetailFindManyArgs";
import { InvoiceDetailFindUniqueArgs } from "./InvoiceDetailFindUniqueArgs";
import { InvoiceDetail } from "./InvoiceDetail";
import { Address } from "../../address/base/Address";
import { Invoice } from "../../invoice/base/Invoice";
import { InvoiceDetailService } from "../invoiceDetail.service";

@graphql.Resolver(() => InvoiceDetail)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class InvoiceDetailResolverBase {
  constructor(
    protected readonly service: InvoiceDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "read",
    possession: "any",
  })
  async _invoiceDetailsMeta(
    @graphql.Args() args: InvoiceDetailFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [InvoiceDetail])
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "read",
    possession: "any",
  })
  async invoiceDetails(
    @graphql.Args() args: InvoiceDetailFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InvoiceDetail[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "InvoiceDetail",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => InvoiceDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "read",
    possession: "own",
  })
  async invoiceDetail(
    @graphql.Args() args: InvoiceDetailFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InvoiceDetail | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "InvoiceDetail",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => InvoiceDetail)
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "create",
    possession: "any",
  })
  async createInvoiceDetail(
    @graphql.Args() args: CreateInvoiceDetailArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InvoiceDetail> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "InvoiceDetail",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"InvoiceDetail"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        address: args.data.address
          ? {
              connect: args.data.address,
            }
          : undefined,

        invoice: args.data.invoice
          ? {
              connect: args.data.invoice,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => InvoiceDetail)
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "update",
    possession: "any",
  })
  async updateInvoiceDetail(
    @graphql.Args() args: UpdateInvoiceDetailArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<InvoiceDetail | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "InvoiceDetail",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"InvoiceDetail"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          address: args.data.address
            ? {
                connect: args.data.address,
              }
            : undefined,

          invoice: args.data.invoice
            ? {
                connect: args.data.invoice,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => InvoiceDetail)
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "delete",
    possession: "any",
  })
  async deleteInvoiceDetail(
    @graphql.Args() args: DeleteInvoiceDetailArgs
  ): Promise<InvoiceDetail | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Address, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "read",
    possession: "any",
  })
  async address(
    @graphql.Parent() parent: InvoiceDetail,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Address | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Address",
    });
    const result = await this.service.getAddress(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.ResolveField(() => Invoice, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "read",
    possession: "any",
  })
  async invoice(
    @graphql.Parent() parent: InvoiceDetail,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Invoice | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Invoice",
    });
    const result = await this.service.getInvoice(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
