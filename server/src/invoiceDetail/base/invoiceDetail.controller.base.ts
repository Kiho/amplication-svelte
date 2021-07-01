import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as basicAuthGuard from "../../auth/basicAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { InvoiceDetailService } from "../invoiceDetail.service";
import { InvoiceDetailCreateInput } from "./InvoiceDetailCreateInput";
import { InvoiceDetailWhereInput } from "./InvoiceDetailWhereInput";
import { InvoiceDetailWhereUniqueInput } from "./InvoiceDetailWhereUniqueInput";
import { InvoiceDetailFindManyArgs } from "./InvoiceDetailFindManyArgs";
import { InvoiceDetailUpdateInput } from "./InvoiceDetailUpdateInput";
import { InvoiceDetail } from "./InvoiceDetail";

export class InvoiceDetailControllerBase {
  constructor(
    protected readonly service: InvoiceDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: InvoiceDetail })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: InvoiceDetailCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<InvoiceDetail> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "InvoiceDetail",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"InvoiceDetail"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        address: data.address
          ? {
              connect: data.address,
            }
          : undefined,

        invoice: data.invoice
          ? {
              connect: data.invoice,
            }
          : undefined,
      },
      select: {
        address: {
          select: {
            id: true,
          },
        },

        amount: true,
        createdAt: true,
        description: true,
        id: true,

        invoice: {
          select: {
            id: true,
          },
        },

        memo: true,
        roomNo: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [InvoiceDetail] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => InvoiceDetailFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<InvoiceDetail[]> {
    const args = plainToClass(InvoiceDetailFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "InvoiceDetail",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        amount: true,
        createdAt: true,
        description: true,
        id: true,

        invoice: {
          select: {
            id: true,
          },
        },

        memo: true,
        roomNo: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: InvoiceDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: InvoiceDetailWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<InvoiceDetail | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "InvoiceDetail",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        amount: true,
        createdAt: true,
        description: true,
        id: true,

        invoice: {
          select: {
            id: true,
          },
        },

        memo: true,
        roomNo: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: InvoiceDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: InvoiceDetailWhereUniqueInput,
    @common.Body()
    data: InvoiceDetailUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<InvoiceDetail | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "InvoiceDetail",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"InvoiceDetail"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          address: data.address
            ? {
                connect: data.address,
              }
            : undefined,

          invoice: data.invoice
            ? {
                connect: data.invoice,
              }
            : undefined,
        },
        select: {
          address: {
            select: {
              id: true,
            },
          },

          amount: true,
          createdAt: true,
          description: true,
          id: true,

          invoice: {
            select: {
              id: true,
            },
          },

          memo: true,
          roomNo: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(basicAuthGuard.BasicAuthGuard, nestAccessControl.ACGuard)
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "InvoiceDetail",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: InvoiceDetail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: InvoiceDetailWhereUniqueInput
  ): Promise<InvoiceDetail | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address: {
            select: {
              id: true,
            },
          },

          amount: true,
          createdAt: true,
          description: true,
          id: true,

          invoice: {
            select: {
              id: true,
            },
          },

          memo: true,
          roomNo: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
