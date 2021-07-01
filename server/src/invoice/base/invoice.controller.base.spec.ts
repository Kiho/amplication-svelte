import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { BasicAuthGuard } from "../../auth/basicAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { InvoiceController } from "../invoice.controller";
import { InvoiceService } from "../invoice.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  totalAmount: 42.42,
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invoiceDate: new Date(),
  discount: 42.42,
  invoiceNo: "exampleInvoiceNo",
};
const CREATE_RESULT = {
  totalAmount: 42.42,
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invoiceDate: new Date(),
  discount: 42.42,
  invoiceNo: "exampleInvoiceNo",
};
const FIND_MANY_RESULT = [
  {
    totalAmount: 42.42,
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    invoiceDate: new Date(),
    discount: 42.42,
    invoiceNo: "exampleInvoiceNo",
  },
];
const FIND_ONE_RESULT = {
  totalAmount: 42.42,
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  invoiceDate: new Date(),
  discount: 42.42,
  invoiceNo: "exampleInvoiceNo",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Invoice", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InvoiceService,
          useValue: service,
        },
      ],
      controllers: [InvoiceController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(BasicAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /invoices", async () => {
    await request(app.getHttpServer())
      .post("/invoices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        invoiceDate: CREATE_RESULT.invoiceDate.toISOString(),
      });
  });

  test("GET /invoices", async () => {
    await request(app.getHttpServer())
      .get("/invoices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          invoiceDate: FIND_MANY_RESULT[0].invoiceDate.toISOString(),
        },
      ]);
  });

  test("GET /invoices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/invoices"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /invoices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/invoices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        invoiceDate: FIND_ONE_RESULT.invoiceDate.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
